using CorrespondenceSystem.LetterHistoryDB;
using CorrespondenceSystem.Modules.Common.Helpers;
using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<CorrespondenceSystem.LetterDB.LetterRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CorrespondenceSystem.LetterDB.LetterRow;

namespace CorrespondenceSystem.LetterDB;

public interface ILetterSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class LetterSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILetterSaveHandler
{
    public LetterSaveHandler(IRequestContext context)
            : base(context)
    {
    }

    protected override void ValidateRequest()
    {
        //Row.CreatedDate = DateTime.Now;
        Row.Id = Guid.NewGuid();
        base.ValidateRequest();
    }
    protected override void AfterSave()
    {



        base.AfterSave();
        short actiontype = 0;

        if (IsCreate)
        {
            actiontype = 1;
        }
        else if (IsUpdate)
        {
            actiontype = 2;
        }
        else
        {
            actiontype = 3;
        }
        var Letterhistory = new LetterHistoryRow { ActionType = actiontype };
        Mapper.MapTo(Row, Letterhistory);
        Connection.Insert<LetterHistoryRow>(Letterhistory);

    }
    
}