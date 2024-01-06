using CorrespondenceSystem.Modules.TemplateDB.DTO;
using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<CorrespondenceSystem.TemplateDB.TemplateRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CorrespondenceSystem.TemplateDB.TemplateRow;

namespace CorrespondenceSystem.TemplateDB;

public interface ITemplateSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class TemplateSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITemplateSaveHandler
{
    public TemplateSaveHandler(IRequestContext context)
            : base(context)
    {
    }

    protected override void ValidateRequest()
    {
        Row.Id = Guid.NewGuid();
        base.ValidateRequest();
    }

    protected override void BeforeSave()
    {
        if (!Row.TemplateFile.EndsWith(".docx", StringComparison.OrdinalIgnoreCase))
        {
            throw new Exception("please upload doc file");
        }

        //var sql = "SELECT IsDefault FROM Template WHERE IsDefault = 1";
        //var result = Connection.Query<bool>(sql);

        //if (Row.IsDefault == true)
        //{
        //    foreach (var item in result)
        //    {

        //    }
        //}


        if (Row.IsDefault.Value)
        {
            IEnumerable<CheckIsDefault> isDefaultRecords = Connection.Query<CheckIsDefault>(@"SELECT Id, Title, IsDefault FROM Template WHERE IsDefault = 1");

            if (isDefaultRecords.Count() != 0 && Row.Id.Value != isDefaultRecords.FirstOrDefault().Id)
            {
                foreach (var item in isDefaultRecords)
                {
                    // Update each record in the database to set IsDefault to false
                    Connection.Execute("UPDATE Template SET IsDefault = 0 WHERE Id = @Id", new { Id = item.Id });
                }

                // Set the IsDefault field of the current record to true
                Connection.Execute("UPDATE Template SET IsDefault = 1 WHERE Id = @Id", new { Id = Row.Id });
            }
        }


        base.BeforeSave();
    }
}