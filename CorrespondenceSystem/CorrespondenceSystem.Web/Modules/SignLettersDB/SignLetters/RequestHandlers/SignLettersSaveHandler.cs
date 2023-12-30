using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<CorrespondenceSystem.SignLettersDB.SignLettersRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CorrespondenceSystem.SignLettersDB.SignLettersRow;

namespace CorrespondenceSystem.SignLettersDB;

public interface ISignLettersSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class SignLettersSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ISignLettersSaveHandler
{
    public SignLettersSaveHandler(IRequestContext context)
            : base(context)
    {
    }

    protected override void ValidateRequest()
    {
        //Row.CreatedDate = DateTime.Now;
        Row.Id = Guid.NewGuid();
        base.ValidateRequest();
    }
}