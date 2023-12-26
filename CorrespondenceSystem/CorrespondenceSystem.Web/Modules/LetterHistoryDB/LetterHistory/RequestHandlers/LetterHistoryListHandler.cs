using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CorrespondenceSystem.LetterHistoryDB.LetterHistoryRow>;
using MyRow = CorrespondenceSystem.LetterHistoryDB.LetterHistoryRow;

namespace CorrespondenceSystem.LetterHistoryDB;

public interface ILetterHistoryListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class LetterHistoryListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ILetterHistoryListHandler
{
    public LetterHistoryListHandler(IRequestContext context)
            : base(context)
    {
    }
}