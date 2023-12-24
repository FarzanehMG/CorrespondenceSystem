using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<CorrespondenceSystem.LetterAttachmentDB.LetterAttachmentRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CorrespondenceSystem.LetterAttachmentDB.LetterAttachmentRow;

namespace CorrespondenceSystem.LetterAttachmentDB;

public interface ILetterAttachmentSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class LetterAttachmentSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILetterAttachmentSaveHandler
{
    public LetterAttachmentSaveHandler(IRequestContext context)
            : base(context)
    {
    }

    protected override void ValidateRequest()
    {
        base.ValidateRequest();
    }
}