using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CorrespondenceSystem.TemplateDB.TemplateRow>;
using MyRow = CorrespondenceSystem.TemplateDB.TemplateRow;

namespace CorrespondenceSystem.TemplateDB;

public interface ITemplateListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class TemplateListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ITemplateListHandler
{
    public TemplateListHandler(IRequestContext context)
            : base(context)
    {
    }
}