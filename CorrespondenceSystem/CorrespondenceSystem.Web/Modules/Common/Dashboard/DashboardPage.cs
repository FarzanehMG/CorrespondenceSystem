using CorrespondenceSystem.Modules.Common.Dashboard.LetterCountChart;
using Microsoft.Extensions.DependencyInjection;

namespace CorrespondenceSystem.Common.Pages
{
    [Route("Dashboard/[action]")]
    public class DashboardPage : Controller
    {
        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            return View(MVC.Views.Common.Dashboard.DashboardIndex);
        }
    }
}
