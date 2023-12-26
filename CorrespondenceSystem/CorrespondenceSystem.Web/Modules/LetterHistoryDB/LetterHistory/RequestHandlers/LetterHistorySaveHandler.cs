using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<CorrespondenceSystem.LetterHistoryDB.LetterHistoryRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CorrespondenceSystem.LetterHistoryDB.LetterHistoryRow;

namespace CorrespondenceSystem.LetterHistoryDB;

public interface ILetterHistorySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class LetterHistorySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILetterHistorySaveHandler
{
    public LetterHistorySaveHandler(IRequestContext context)
            : base(context)
    {
    }
}