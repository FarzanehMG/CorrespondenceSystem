using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace CorrespondenceSystem.LetterDB.Pages;

[PageAuthorize(typeof(LetterRow))]
public class LetterPage : Controller
{
    [Route("LetterDB/Letter")]
    public ActionResult Index()
    {
        return this.GridPage("@/LetterDB/Letter/LetterPage",
            LetterRow.Fields.PageTitle());
    }
}