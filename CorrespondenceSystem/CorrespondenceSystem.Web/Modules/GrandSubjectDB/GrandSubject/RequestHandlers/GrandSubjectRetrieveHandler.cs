using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CorrespondenceSystem.GrandSubjectDB.GrandSubjectRow>;
using MyRow = CorrespondenceSystem.GrandSubjectDB.GrandSubjectRow;

namespace CorrespondenceSystem.GrandSubjectDB;

public interface IGrandSubjectRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class GrandSubjectRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IGrandSubjectRetrieveHandler
{
    public GrandSubjectRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}