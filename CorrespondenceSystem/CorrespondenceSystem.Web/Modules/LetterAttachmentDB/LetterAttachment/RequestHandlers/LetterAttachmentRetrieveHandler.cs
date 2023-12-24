using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CorrespondenceSystem.LetterAttachmentDB.LetterAttachmentRow>;
using MyRow = CorrespondenceSystem.LetterAttachmentDB.LetterAttachmentRow;

namespace CorrespondenceSystem.LetterAttachmentDB;

public interface ILetterAttachmentRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class LetterAttachmentRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ILetterAttachmentRetrieveHandler
{
    public LetterAttachmentRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}