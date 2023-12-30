using CorrespondenceSystem.Administration;
using CorrespondenceSystem.Modules.LetterDB.DTO;
using CorrespondenceSystem.SignDB;
using CorrespondenceSystem.SignLettersDB.Columns;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
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
                WHERE u.UserId = 1 AND s.IsLast = 1
                ";

        var result = connection.Query<SignLetterViewModel>(sql, new { UserId = userId }).FirstOrDefault();

        return result;
    }

}
