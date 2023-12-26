using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<CorrespondenceSystem.CounterpartDB.CounterpartRow>;
using MyRow = CorrespondenceSystem.CounterpartDB.CounterpartRow;

namespace CorrespondenceSystem.CounterpartDB;

public interface ICounterpartRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

public class CounterpartRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, ICounterpartRetrieveHandler
{
    public CounterpartRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}