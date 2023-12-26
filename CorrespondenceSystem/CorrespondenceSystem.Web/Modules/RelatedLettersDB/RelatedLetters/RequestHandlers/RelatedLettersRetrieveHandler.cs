using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CorrespondenceSystem.RelatedLettersDB.RelatedLettersRow>;
using MyRow = CorrespondenceSystem.RelatedLettersDB.RelatedLettersRow;

namespace CorrespondenceSystem.RelatedLettersDB;

public interface IRelatedLettersRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class RelatedLettersRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IRelatedLettersRetrieveHandler
{
    public RelatedLettersRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}