
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

        var IncomingLetter = Connection.Query<int>(@"Select count(letterType) from Letter where lettertype = 2").FirstOrDefault();

        var OutgoingLetter = Connection.Query<int>(@"Select count(lettertype) from letter where letterType = 1").FirstOrDefault();

        model.CountIncomingLetter = IncomingLetter;
        model.CountOutgoingLetter = OutgoingLetter;

        model.PieChartLabel = new[] {"Incoming Letters", "Outgoing Letters" };
        model.PieChartData = new[] { model.CountIncomingLetter, model.CountOutgoingLetter };

        var username = User?.Identity?.Name;

        return View(MVC.Views.Common.Dashboard.DashboardIndex,model);
    }

}
