using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = CorrespondenceSystem.CounterpartDB.CounterpartRow;

namespace CorrespondenceSystem.CounterpartDB;

public interface ICounterpartDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class CounterpartDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICounterpartDeleteHandler
{
    public CounterpartDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}