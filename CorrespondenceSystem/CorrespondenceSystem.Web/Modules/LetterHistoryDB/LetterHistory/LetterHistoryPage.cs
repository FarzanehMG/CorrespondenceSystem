using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace CorrespondenceSystem.LetterHistoryDB.Pages;

[PageAuthorize(typeof(LetterHistoryRow))]
public class LetterHistoryPage : Controller
{
    [Route("LetterHistoryDB/LetterHistory")]
    public ActionResult Index()
    {
        return this.GridPage("@/LetterHistoryDB/LetterHistory/LetterHistoryPage",
            LetterHistoryRow.Fields.PageTitle());
    }
}