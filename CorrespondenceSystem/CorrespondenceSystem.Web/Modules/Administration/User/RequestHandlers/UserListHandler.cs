using MyRequest = CorrespondenceSystem.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<CorrespondenceSystem.Administration.UserRow>;
using MyRow = CorrespondenceSystem.Administration.UserRow;

namespace CorrespondenceSystem.Administration;
public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
{
    public UserListHandler(IRequestContext context)
         : base(context)
    {
    }
}