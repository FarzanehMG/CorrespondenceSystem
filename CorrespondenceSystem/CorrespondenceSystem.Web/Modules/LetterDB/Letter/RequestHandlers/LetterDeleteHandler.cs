using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CorrespondenceSystem.LetterDB.LetterRow;

namespace CorrespondenceSystem.LetterDB;

public interface ILetterDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class LetterDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ILetterDeleteHandler
{
    public LetterDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}