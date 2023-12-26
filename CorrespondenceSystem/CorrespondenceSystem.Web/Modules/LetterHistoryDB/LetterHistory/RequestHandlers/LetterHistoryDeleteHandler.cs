using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CorrespondenceSystem.LetterHistoryDB.LetterHistoryRow;

namespace CorrespondenceSystem.LetterHistoryDB;

public interface ILetterHistoryDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class LetterHistoryDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ILetterHistoryDeleteHandler
{
    public LetterHistoryDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}