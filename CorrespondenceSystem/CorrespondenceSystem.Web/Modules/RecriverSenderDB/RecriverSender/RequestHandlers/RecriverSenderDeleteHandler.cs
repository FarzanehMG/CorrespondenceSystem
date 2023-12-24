using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CorrespondenceSystem.RecriverSenderDB.RecriverSenderRow;

namespace CorrespondenceSystem.RecriverSenderDB;

public interface IRecriverSenderDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class RecriverSenderDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IRecriverSenderDeleteHandler
{
    public RecriverSenderDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}