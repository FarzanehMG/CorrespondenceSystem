using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CorrespondenceSystem.LetterHistoryDB.LetterHistoryRow>;
using MyRow = CorrespondenceSystem.LetterHistoryDB.LetterHistoryRow;

namespace CorrespondenceSystem.LetterHistoryDB;

public interface ILetterHistoryRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class LetterHistoryRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ILetterHistoryRetrieveHandler
{
    public LetterHistoryRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}