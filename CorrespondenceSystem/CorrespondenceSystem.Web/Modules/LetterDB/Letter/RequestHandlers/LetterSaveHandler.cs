using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<CorrespondenceSystem.LetterDB.LetterRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CorrespondenceSystem.LetterDB.LetterRow;

namespace CorrespondenceSystem.LetterDB;

public interface ILetterSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class LetterSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILetterSaveHandler
{
    public LetterSaveHandler(IRequestContext context)
            : base(context)
    {
    }

    protected override void ValidateRequest()
    {
        Row.Id = Guid.NewGuid();
        base.ValidateRequest();
    }
}