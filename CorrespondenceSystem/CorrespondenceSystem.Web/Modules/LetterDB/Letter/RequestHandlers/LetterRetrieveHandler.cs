using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CorrespondenceSystem.LetterDB.LetterRow>;
using MyRow = CorrespondenceSystem.LetterDB.LetterRow;

namespace CorrespondenceSystem.LetterDB;

public interface ILetterRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class LetterRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ILetterRetrieveHandler
{
    public LetterRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}