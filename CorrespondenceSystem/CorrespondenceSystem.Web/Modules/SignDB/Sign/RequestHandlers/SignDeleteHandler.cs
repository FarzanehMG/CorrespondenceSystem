using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CorrespondenceSystem.SignDB.SignRow;

namespace CorrespondenceSystem.SignDB;

public interface ISignDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class SignDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ISignDeleteHandler
{
    public SignDeleteHandler(IRequestContext context)
            : base(context)
    {
    }

    
}