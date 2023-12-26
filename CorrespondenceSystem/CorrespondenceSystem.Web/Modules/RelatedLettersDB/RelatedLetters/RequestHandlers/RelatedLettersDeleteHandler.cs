using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CorrespondenceSystem.RelatedLettersDB.RelatedLettersRow;

namespace CorrespondenceSystem.RelatedLettersDB;

public interface IRelatedLettersDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class RelatedLettersDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IRelatedLettersDeleteHandler
{
    public RelatedLettersDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}