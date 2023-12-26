using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CorrespondenceSystem.TemplateDB.TemplateRow>;
using MyRow = CorrespondenceSystem.TemplateDB.TemplateRow;

namespace CorrespondenceSystem.TemplateDB;

public interface ITemplateRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class TemplateRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ITemplateRetrieveHandler
{
    public TemplateRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}