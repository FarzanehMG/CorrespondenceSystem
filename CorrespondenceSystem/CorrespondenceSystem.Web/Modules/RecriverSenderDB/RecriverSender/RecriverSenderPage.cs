using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace CorrespondenceSystem.RecriverSenderDB.Pages;

[PageAuthorize(typeof(RecriverSenderRow))]
public class RecriverSenderPage : Controller
{
    [Route("RecriverSenderDB/RecriverSender")]
    public ActionResult Index()
    {
        return this.GridPage("@/RecriverSenderDB/RecriverSender/RecriverSenderPage",
            RecriverSenderRow.Fields.PageTitle());
    }
}