using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace CorrespondenceSystem.SignLettersDB.Pages;

[PageAuthorize(typeof(SignLettersRow))]
public class SignLettersPage : Controller
{
    [Route("SignLettersDB/SignLetters")]
    public ActionResult Index()
    {
        return this.GridPage("@/SignLettersDB/SignLetters/SignLettersPage",
            SignLettersRow.Fields.PageTitle());
    }
}