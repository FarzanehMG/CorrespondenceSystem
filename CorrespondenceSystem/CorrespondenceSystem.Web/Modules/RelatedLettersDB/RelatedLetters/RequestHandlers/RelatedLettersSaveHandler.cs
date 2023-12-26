using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<CorrespondenceSystem.RelatedLettersDB.RelatedLettersRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CorrespondenceSystem.RelatedLettersDB.RelatedLettersRow;

namespace CorrespondenceSystem.RelatedLettersDB;

public interface IRelatedLettersSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class RelatedLettersSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IRelatedLettersSaveHandler
{
    public RelatedLettersSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}