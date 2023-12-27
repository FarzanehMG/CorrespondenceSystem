using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<CorrespondenceSystem.RelatedLettersDB.RelatedLettersRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = CorrespondenceSystem.RelatedLettersDB.RelatedLettersRow;

namespace CorrespondenceSystem.RelatedLettersDB;

public interface IRelatedLettersSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class RelatedLettersSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IRelatedLettersSaveHandler
{
    public RelatedLettersSaveHandler(IRequestContext context)
            : base(context)
    {
    }
    protected override void ValidateRequest()
    {
        // Row.LetterId = Connection.Query("select rl.LetterId\r\nfrom dbo.Letter l \r\ninner join dbo.RelatedLetters rl\r\non l.id=rl.LetterId;\r\n ");
        //var Row.LetterId = Connection.Query<Guid>(@"SELECT rl.LetterId FROM dbo.Letter l INNER JOIN dbo.RelatedLetters rl ON l.id = rl.LetterId WHERE rl.LetterId IS NOT NULL").FirstOrDefault();
        Row.Id = Guid.NewGuid();
        base.ValidateRequest();
    }
}