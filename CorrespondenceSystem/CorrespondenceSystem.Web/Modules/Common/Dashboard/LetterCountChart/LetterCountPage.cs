using CorrespondenceSystem.Common;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace CorrespondenceSystem.Modules.Common.Dashboard.LetterCountChart;

[ViewComponent(Name = "LetterCountPage")]
public class LetterCountPage : ViewComponent
{
    public IViewComponentResult Invoke()
    {
        var model = new LetterCountPageModel();

        var Connection = HttpContext.RequestServices.GetRequiredService<ISqlConnections>().NewByKey("CorrespondenceSystem");

        //var IncomingLetters = Connection.Query<LetterCount>(@"
        //        SELECT YEAR(CreatedDate) AS year,
        //               MONTH(CreatedDate) AS month,
        //               COUNT(letterType) AS letterCount
        //        FROM Letter
        //        WHERE letterType = 1
        //        GROUP BY YEAR(CreatedDate), MONTH(CreatedDate);");

        //var OutgoingLetters = Connection.Query<LetterCount>(@"
        //        SELECT YEAR(CreatedDate) AS year,
        //               MONTH(CreatedDate) AS month,
        //               COUNT(letterType) AS letterCount
        //        FROM Letter
        //        WHERE letterType = 0
        //        GROUP BY YEAR(CreatedDate), MONTH(CreatedDate);");

        var IncomingLetters = Connection.Query<LetterCount>(@"
                    SELECT 
                    FORMAT(CreatedDate, 'yyyy', 'fa-IR') AS PersianYear,
                    FORMAT(CreatedDate, 'MM', 'fa-IR') AS PersianMonth,
                    SUM(CASE WHEN letterType = 1 THEN 1 ELSE 0 END) AS letterCount
                    FROM Letter
                    GROUP BY 
                    FORMAT(CreatedDate, 'yyyy', 'fa-IR'),
                    FORMAT(CreatedDate, 'MM', 'fa-IR');");

        var OutgoingLetters = Connection.Query<LetterCount>(@"
                    SELECT 
                    FORMAT(CreatedDate, 'yyyy', 'fa-IR') AS PersianYear,
                    FORMAT(CreatedDate, 'MM', 'fa-IR') AS PersianMonth,
                    SUM(CASE WHEN letterType = 0 THEN 1 ELSE 0 END) AS LetterCount
                    FROM Letter
                    GROUP BY 
                    FORMAT(CreatedDate, 'yyyy', 'fa-IR'),
                    FORMAT(CreatedDate, 'MM', 'fa-IR');");

        model.CountIncomingLetterAban = IncomingLetters.FirstOrDefault(x => x.PersianMonth == 8)?.letterCount ?? 0;
        model.CountIncomingLetterDey = IncomingLetters.FirstOrDefault(x => x.PersianMonth == 10)?.letterCount ?? 0;
        model.CountIncomingLetterBahman = IncomingLetters.FirstOrDefault(x => x.PersianMonth == 11)?.letterCount ?? 0;
        // Repeat the above pattern for each month...

        model.CountOutgoingLetterAban = OutgoingLetters.FirstOrDefault(x => x.PersianMonth == 8)?.letterCount ?? 0;
        model.CountOutgoingLetterDey = OutgoingLetters.FirstOrDefault(x => x.PersianMonth == 10)?.letterCount ?? 0;
        model.CountOutgoingLetterBahman = OutgoingLetters.FirstOrDefault(x => x.PersianMonth == 11)?.letterCount ?? 0;
        // Repeat the above pattern for each month...

        return View(MVC.Views.Common.Dashboard.LetterCountChart.LetterCountIndex, model);
    }

    private class LetterCount
    {
        public int PersianYear { get; set; }
        public int PersianMonth { get; set; }
        public int letterCount { get; set; }
    }
}
