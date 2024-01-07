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

        return View(MVC.Views.Common.Dashboard.LetterCountChart.LetterCountIndex, model);
    }

    private class LetterCount
    {
        public int year { get; set; }
        public int month { get; set; }
        public int letterCount { get; set; }
    }
}
