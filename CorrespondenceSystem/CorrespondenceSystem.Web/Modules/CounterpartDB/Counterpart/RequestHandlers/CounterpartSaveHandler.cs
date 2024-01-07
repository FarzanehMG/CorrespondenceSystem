using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<CorrespondenceSystem.CounterpartDB.CounterpartRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CorrespondenceSystem.CounterpartDB.CounterpartRow;

namespace CorrespondenceSystem.CounterpartDB;

public interface ICounterpartSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class CounterpartSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ICounterpartSaveHandler
{
    public CounterpartSaveHandler(IRequestContext context)
            : base(context)
    {
    }
    protected override void ValidateRequest()
    {
        Row.Id = Guid.NewGuid();
        base.ValidateRequest();
    }
}