using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<CorrespondenceSystem.Administration.LanguageRow>;
using MyRow = CorrespondenceSystem.Administration.LanguageRow;


namespace CorrespondenceSystem.Administration;
public interface ILanguageListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class LanguageListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageListHandler
{
    public LanguageListHandler(IRequestContext context)
         : base(context)
    {
    }
}