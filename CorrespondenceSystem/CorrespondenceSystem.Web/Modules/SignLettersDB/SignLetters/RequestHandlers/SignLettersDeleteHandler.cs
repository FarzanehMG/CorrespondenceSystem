using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CorrespondenceSystem.SignLettersDB.SignLettersRow;

namespace CorrespondenceSystem.SignLettersDB;

public interface ISignLettersDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class SignLettersDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ISignLettersDeleteHandler
{
    public SignLettersDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}