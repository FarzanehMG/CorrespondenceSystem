using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<CorrespondenceSystem.TemplateDB.TemplateRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CorrespondenceSystem.TemplateDB.TemplateRow;

namespace CorrespondenceSystem.TemplateDB;

public interface ITemplateSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class TemplateSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ITemplateSaveHandler
{
    public TemplateSaveHandler(IRequestContext context)
            : base(context)
    {
    }

    protected override void ValidateRequest()
    {
        Row.Id = Guid.NewGuid();
        base.ValidateRequest();
    }
}