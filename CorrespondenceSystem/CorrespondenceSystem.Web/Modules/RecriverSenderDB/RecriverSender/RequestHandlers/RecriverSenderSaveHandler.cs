using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<CorrespondenceSystem.RecriverSenderDB.RecriverSenderRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CorrespondenceSystem.RecriverSenderDB.RecriverSenderRow;

namespace CorrespondenceSystem.RecriverSenderDB;

public interface IRecriverSenderSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class RecriverSenderSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IRecriverSenderSaveHandler
{
    public RecriverSenderSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}