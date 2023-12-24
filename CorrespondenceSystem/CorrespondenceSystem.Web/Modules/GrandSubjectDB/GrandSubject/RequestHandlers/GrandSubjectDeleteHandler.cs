using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CorrespondenceSystem.GrandSubjectDB.GrandSubjectRow;

namespace CorrespondenceSystem.GrandSubjectDB;

public interface IGrandSubjectDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class GrandSubjectDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IGrandSubjectDeleteHandler
{
    public GrandSubjectDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}