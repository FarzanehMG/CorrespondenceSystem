using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CorrespondenceSystem.LetterAttachmentDB.LetterAttachmentRow;

namespace CorrespondenceSystem.LetterAttachmentDB;

public interface ILetterAttachmentDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class LetterAttachmentDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ILetterAttachmentDeleteHandler
{
    public LetterAttachmentDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}