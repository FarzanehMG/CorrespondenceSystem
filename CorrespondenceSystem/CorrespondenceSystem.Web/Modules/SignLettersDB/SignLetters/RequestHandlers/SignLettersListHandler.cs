using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CorrespondenceSystem.SignLettersDB.SignLettersRow>;
using MyRow = CorrespondenceSystem.SignLettersDB.SignLettersRow;

namespace CorrespondenceSystem.SignLettersDB;

public interface ISignLettersListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class SignLettersListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ISignLettersListHandler
{
    public SignLettersListHandler(IRequestContext context)
            : base(context)
    {
    }
}