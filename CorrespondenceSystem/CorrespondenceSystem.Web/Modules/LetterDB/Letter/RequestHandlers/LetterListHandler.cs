using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CorrespondenceSystem.LetterDB.LetterRow>;
using MyRow = CorrespondenceSystem.LetterDB.LetterRow;

namespace CorrespondenceSystem.LetterDB;

public interface ILetterListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class LetterListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ILetterListHandler
{
    public LetterListHandler(IRequestContext context)
            : base(context)
    {
    }
}