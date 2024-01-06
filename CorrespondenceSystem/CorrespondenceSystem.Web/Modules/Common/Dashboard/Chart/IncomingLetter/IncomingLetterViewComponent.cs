using CorrespondenceSystem.Modules.Common.Dashboard.Chart.IncomingLetter;

namespace CorrespondenceSystem.Common.Pages;

[ViewComponent(Name = "IncomingLetter")]
public class IncomingLetterViewComponent : ViewComponent
{
    private ISqlConnections Connection { get; }

    public IncomingLetterViewComponent(ISqlConnections connection)
    {
        Connection = connection;
    }

    public IViewComponentResult Invoke()
    {

        var model = new IncomingLettersModel();

        var c = Connection.NewByKey("CorrespondenceSystem");


        var IncomingLettersCount = c.Query<int>(@"Select count(letterType) from Letter where lettertype = 2").FirstOrDefault();


        model.CountIncomingLetters = IncomingLettersCount;
        

        return View(MVC.Views.Common.Dashboard.Chart.IncomingLetter.IncomingLetterIndex, model);
    }
}
