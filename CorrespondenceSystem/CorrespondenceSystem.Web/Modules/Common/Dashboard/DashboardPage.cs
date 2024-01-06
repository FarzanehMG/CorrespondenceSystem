using Microsoft.Extensions.DependencyInjection;

namespace CorrespondenceSystem.Common.Pages
{
    [Route("Dashboard/[action]")]
    public class DashboardPage : Controller
    {
        [PageAuthorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            var model = new DashboardPageModel();

            var Connection = HttpContext.RequestServices.GetRequiredService<ISqlConnections>().NewByKey("CorrespondenceSystem");

            var IncomingLetters = Connection.Query<LetterCount>(@"
                SELECT YEAR(CreatedDate) AS year,
                       MONTH(CreatedDate) AS month,
                       COUNT(letterType) AS letterCount
                FROM Letter
                WHERE letterType = 1
                GROUP BY YEAR(CreatedDate), MONTH(CreatedDate);");

            var OutgoingLetters = Connection.Query<LetterCount>(@"
                SELECT YEAR(CreatedDate) AS year,
                       MONTH(CreatedDate) AS month,
                       COUNT(letterType) AS letterCount
                FROM Letter
                WHERE letterType = 0
                GROUP BY YEAR(CreatedDate), MONTH(CreatedDate);");

            model.CountIncomingLetterNov = IncomingLetters.FirstOrDefault(x => x.month == 11)?.letterCount ?? 0;
            model.CountIncomingLetterDec = IncomingLetters.FirstOrDefault(x => x.month == 12)?.letterCount ?? 0;
            // Repeat the above pattern for each month...

            model.CountOutgoingLetterJan = OutgoingLetters.FirstOrDefault(x => x.month == 1)?.letterCount ?? 0;
            model.CountOutgoingLetterDec = OutgoingLetters.FirstOrDefault(x => x.month == 12)?.letterCount ?? 0;
            // Repeat the above pattern for each month...

            return View(MVC.Views.Common.Dashboard.DashboardIndex, model);
        }

        private class LetterCount
        {
            public int year { get; set; }
            public int month { get; set; }
            public int letterCount { get; set; }
        }
    }
}
