using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CorrespondenceSystem.SignDB.SignRow>;
using MyRow = CorrespondenceSystem.SignDB.SignRow;

namespace CorrespondenceSystem.SignDB;

public interface ISignListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class SignListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISignListHandler
{
    public SignListHandler(IRequestContext context)
            : base(context)
    {
    }
}