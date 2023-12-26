using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CorrespondenceSystem.RelatedLettersDB.RelatedLettersRow>;
using MyRow = CorrespondenceSystem.RelatedLettersDB.RelatedLettersRow;

namespace CorrespondenceSystem.RelatedLettersDB;

public interface IRelatedLettersListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class RelatedLettersListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IRelatedLettersListHandler
{
    public RelatedLettersListHandler(IRequestContext context)
            : base(context)
    {
    }
}