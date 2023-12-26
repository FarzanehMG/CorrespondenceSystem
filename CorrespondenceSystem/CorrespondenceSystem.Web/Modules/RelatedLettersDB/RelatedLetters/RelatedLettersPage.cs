using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace CorrespondenceSystem.RelatedLettersDB.Pages;

[PageAuthorize(typeof(RelatedLettersRow))]
public class RelatedLettersPage : Controller
{
    [Route("RelatedLettersDB/RelatedLetters")]
    public ActionResult Index()
    {
        return this.GridPage("@/RelatedLettersDB/RelatedLetters/RelatedLettersPage",
            RelatedLettersRow.Fields.PageTitle());
    }
}