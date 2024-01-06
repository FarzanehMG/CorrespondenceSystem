using CorrespondenceSystem.Administration;
using CorrespondenceSystem.Modules.LetterDB.DTO;
using CorrespondenceSystem.SignDB;
using CorrespondenceSystem.SignLettersDB.Columns;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System.Data;
using System.Net.Http;
using System.Security.Claims;

namespace CorrespondenceSystem.Modules.LetterDB.Letter;

public class LetterRepository : BaseRepository
{
    private readonly Serenity.Data.ISqlConnections _sqlConnections;

    public LetterRepository(IRequestContext context) : base(context)
    {
    }

    public LetterRepository(ISqlConnections sqlConnections, IRequestContext context = null) : base(context)
    {
        _sqlConnections = sqlConnections;
    }


    public SignLetterViewModel AddSign(string userId, HttpContext httpContext)
    {
        var connection = httpContext.RequestServices.GetRequiredService<ISqlConnections>().NewByKey("Training");
        var sql = @"
                SELECT 
                s.Title,s.Id as id,
                GETDATE() AS CreatedDate
                FROM [CorrespondenceSystem].[dbo].[Sign] s
                INNER JOIN [TrainingDb].[dbo].[Users] u ON s.UserId = u.UserId
                WHERE u.UserId = @UserId AND s.IsLast = 1
                ";

        var result = connection.Query<SignLetterViewModel>(sql, new { UserId = userId }).FirstOrDefault();

        return result;
    }

    public Guid GetDefaultRecriverSenderId(HttpContext httpContext)
    {
        var connection = httpContext.RequestServices.GetRequiredService<ISqlConnections>().NewByKey("Training");

        var sql = @"SELECT Id as SenderId
                    FROM [CorrespondenceSystem].[dbo].[RecriverSender]
                    WHERE IsDefault = 1";

        var result = connection.Query<Guid>(sql).FirstOrDefault();
        return result;
    }

    public Guid GetDefaultTemplate(HttpContext httpContext)
    {
        var connection = httpContext.RequestServices.GetRequiredService<ISqlConnections>().NewByKey("Training");

        var sql = @"SELECT Id as TemplateId
                    FROM [CorrespondenceSystem].[dbo].[Template]
                    WHERE IsDefault = 1";

        var result = connection.Query<Guid>(sql).FirstOrDefault();
        return result;
    }

    public identifiregenViewModel GetDefaultIdentifireGen(HttpContext httpContext)
    {

        using (var connection = httpContext.RequestServices.GetRequiredService<ISqlConnections>().NewByKey("CorrespondenceSystem"))
        {
            var result = Dapper.SqlMapper.ExecuteScalar<string>(connection, "AutoIncrement", commandType: CommandType.StoredProcedure);

            var viewModel = new identifiregenViewModel
            {
                Identifier = result
            };
            return viewModel;
        }

    }

    public DownloadLetter DownloadWordLetter(DownloadRequest letterId, HttpContext httpContext)
    {
        var connection = httpContext.RequestServices.GetRequiredService<ISqlConnections>().NewByKey("CorrespondenceSystem");
        var sql = @"SELECT l.Title,l.LetterIdentifier,l.LetterIdentifierGen,l.LetterNo,l.CreatedDate,
                    rsSender.Name as SenderTitle, 
                    rsReceiver.Name as ReceiverTitle,
                    gs.Title as GrandSubjectTitle,
                    t.TemplateFile as TemplateFile,
                    l.LetterContent,l.Tag,l.LetterCarrier,l.HasAttachment as HasAttachmentText,
					s.SignAttachment as sign
                    FROM Letter as l
                    INNER JOIN RecriverSender as rsSender ON l.SenderId = rsSender.Id
                    INNER JOIN RecriverSender as rsReceiver ON l.ReceiverId = rsReceiver.Id
                    INNER JOIN GrandSubject as gs ON gs.Id = l.GrandSubjectId
                    INNER JOIN Template as t ON t.Id = l.TemplateId
					INNER JOIN SignedLetters as sl ON sl.LetterId = l.Id 
					INNER JOIN Sign as s ON sl.SignId = s.Id
                    WHERE l.Id = @LetterId";

        var result = connection.Query<DownloadLetter>(sql, new { LetterId = letterId.Id }).FirstOrDefault();

        // Check if HasAttachment is true and set the corresponding value
        result.HasAttachmentText = result.HasAttachment ? "دارد" : "ندارد";

        //if (result != null && !string.IsNullOrEmpty(result.TemplateFile))
        //{
        //    // Read the file content
        //    byte[] fileBytes = System.IO.File.ReadAllBytes(result.TemplateFile);

        //    // Set the file content in the DownloadLetter object
        //    result.TemplateFileContent = fileBytes;
        //}

        return result;
    }

}
