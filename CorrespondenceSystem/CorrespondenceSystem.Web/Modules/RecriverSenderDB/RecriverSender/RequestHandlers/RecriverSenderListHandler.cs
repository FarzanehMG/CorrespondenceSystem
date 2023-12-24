using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CorrespondenceSystem.RecriverSenderDB.RecriverSenderRow>;
using MyRow = CorrespondenceSystem.RecriverSenderDB.RecriverSenderRow;

namespace CorrespondenceSystem.RecriverSenderDB;

public interface IRecriverSenderListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class RecriverSenderListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IRecriverSenderListHandler
{
    public RecriverSenderListHandler(IRequestContext context)
            : base(context)
    {
    }
}