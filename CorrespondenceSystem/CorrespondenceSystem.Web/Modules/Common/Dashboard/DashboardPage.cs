
using Microsoft.Extensions.DependencyInjection;

namespace CorrespondenceSystem.Common.Pages;

[Route("Dashboard/[action]")]
public class DashboardPage : Controller
{ 
    [PageAuthorize, HttpGet, Route("~/")]
    public ActionResult Index()
    {
        var model = new DashboardPageModel();


        var Connection = HttpContext.RequestServices.GetRequiredService<ISqlConnections>().NewByKey("CorrespondenceSystem");

        var IncomingLetter = Connection.Query<int>(@"Select count(letterType) from Letter where lettertype = 1").FirstOrDefault();

        var OutgoingLetter = Connection.Query<int>(@"Select count(lettertype) from letter where letterType = 0").FirstOrDefault();

        model.CountIncomingLetter = IncomingLetter;
        model.CountOutgoingLetter = OutgoingLetter;

        return View(MVC.Views.Common.Dashboard.DashboardIndex,model);
    }

}
