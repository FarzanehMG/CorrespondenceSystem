using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace CorrespondenceSystem.SignDB.Pages;

[PageAuthorize(typeof(SignRow))]
public class SignPage : Controller
{
    [Route("SignDB/Sign")]
    public ActionResult Index()
    {
        return this.GridPage("@/SignDB/Sign/SignPage",
            SignRow.Fields.PageTitle());
    }
}