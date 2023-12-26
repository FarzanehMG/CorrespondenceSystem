using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CorrespondenceSystem.TemplateDB.TemplateRow;

namespace CorrespondenceSystem.TemplateDB;

public interface ITemplateDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class TemplateDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ITemplateDeleteHandler
{
    public TemplateDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}