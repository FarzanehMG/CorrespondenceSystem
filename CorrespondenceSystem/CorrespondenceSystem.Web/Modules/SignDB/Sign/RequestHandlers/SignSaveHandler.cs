using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<CorrespondenceSystem.SignDB.SignRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CorrespondenceSystem.SignDB.SignRow;

namespace CorrespondenceSystem.SignDB;

public interface ISignSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class SignSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISignSaveHandler
{
    public SignSaveHandler(IRequestContext context)
            : base(context)
    {
    }
    protected override void ValidateRequest()
    {
        Row.Id = Guid.NewGuid();
        base.ValidateRequest();
    }
}