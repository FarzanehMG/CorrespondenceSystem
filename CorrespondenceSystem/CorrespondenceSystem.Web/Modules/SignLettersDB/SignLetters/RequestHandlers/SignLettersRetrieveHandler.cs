using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CorrespondenceSystem.SignLettersDB.SignLettersRow>;
using MyRow = CorrespondenceSystem.SignLettersDB.SignLettersRow;

namespace CorrespondenceSystem.SignLettersDB;

public interface ISignLettersRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class SignLettersRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISignLettersRetrieveHandler
{
    public SignLettersRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}