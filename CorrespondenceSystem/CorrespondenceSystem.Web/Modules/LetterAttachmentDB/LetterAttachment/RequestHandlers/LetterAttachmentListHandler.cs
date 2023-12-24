using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CorrespondenceSystem.LetterAttachmentDB.LetterAttachmentRow>;
using MyRow = CorrespondenceSystem.LetterAttachmentDB.LetterAttachmentRow;

namespace CorrespondenceSystem.LetterAttachmentDB;

public interface ILetterAttachmentListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class LetterAttachmentListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ILetterAttachmentListHandler
{
    public LetterAttachmentListHandler(IRequestContext context)
            : base(context)
    {
    }
}