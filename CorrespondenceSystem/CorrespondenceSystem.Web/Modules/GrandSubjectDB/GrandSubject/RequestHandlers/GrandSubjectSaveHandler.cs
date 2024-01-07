using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<CorrespondenceSystem.GrandSubjectDB.GrandSubjectRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CorrespondenceSystem.GrandSubjectDB.GrandSubjectRow;

namespace CorrespondenceSystem.GrandSubjectDB;

public interface IGrandSubjectSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class GrandSubjectSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IGrandSubjectSaveHandler
{
    public GrandSubjectSaveHandler(IRequestContext context)
            : base(context)
    {
    }
    protected override void ValidateRequest()
    {
        Row.Id = Guid.NewGuid();
        base.ValidateRequest();
    }
}