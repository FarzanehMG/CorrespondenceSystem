using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CorrespondenceSystem.GrandSubjectDB.GrandSubjectRow>;
using MyRow = CorrespondenceSystem.GrandSubjectDB.GrandSubjectRow;

namespace CorrespondenceSystem.GrandSubjectDB;

public interface IGrandSubjectListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class GrandSubjectListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IGrandSubjectListHandler
{
    public GrandSubjectListHandler(IRequestContext context)
            : base(context)
    {
    }
}