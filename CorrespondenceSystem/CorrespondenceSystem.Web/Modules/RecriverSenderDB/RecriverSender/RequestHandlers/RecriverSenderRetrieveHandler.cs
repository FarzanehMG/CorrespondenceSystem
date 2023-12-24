using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CorrespondenceSystem.RecriverSenderDB.RecriverSenderRow>;
using MyRow = CorrespondenceSystem.RecriverSenderDB.RecriverSenderRow;

namespace CorrespondenceSystem.RecriverSenderDB;

public interface IRecriverSenderRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class RecriverSenderRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IRecriverSenderRetrieveHandler
{
    public RecriverSenderRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}