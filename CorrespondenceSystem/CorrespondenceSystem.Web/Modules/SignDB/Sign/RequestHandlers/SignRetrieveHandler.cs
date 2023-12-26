using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CorrespondenceSystem.SignDB.SignRow>;
using MyRow = CorrespondenceSystem.SignDB.SignRow;

namespace CorrespondenceSystem.SignDB;

public interface ISignRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class SignRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ISignRetrieveHandler
{
    public SignRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}