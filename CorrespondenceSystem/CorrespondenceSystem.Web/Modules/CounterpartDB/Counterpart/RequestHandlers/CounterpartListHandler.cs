using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CorrespondenceSystem.CounterpartDB.CounterpartRow>;
using MyRow = CorrespondenceSystem.CounterpartDB.CounterpartRow;

namespace CorrespondenceSystem.CounterpartDB;

public interface ICounterpartListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class CounterpartListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ICounterpartListHandler
{
    public CounterpartListHandler(IRequestContext context)
            : base(context)
    {
    }
}