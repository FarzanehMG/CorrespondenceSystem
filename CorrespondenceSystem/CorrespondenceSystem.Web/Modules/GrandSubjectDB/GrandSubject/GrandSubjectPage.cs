using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace CorrespondenceSystem.GrandSubjectDB.Pages;

[PageAuthorize(typeof(GrandSubjectRow))]
public class GrandSubjectPage : Controller
{
    [Route("GrandSubjectDB/GrandSubject")]
    public ActionResult Index()
    {
        return this.GridPage("@/GrandSubjectDB/GrandSubject/GrandSubjectPage",
            GrandSubjectRow.Fields.PageTitle());
    }
}