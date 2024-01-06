namespace CorrespondenceSystem.Modules.Common.Dashboard.Chart.OutgoingLetter;

[ViewComponent(Name = "OutgoingLetter")]
public class OutgoingLetterrViewComponent : ViewComponent
{
    private ISqlConnections Connection { get; }

    public OutgoingLetterrViewComponent(ISqlConnections connection)
    {
        Connection = connection;
    }

    public IViewComponentResult Invoke()
    {

        var model = new OutgoingLettersModel();


        var c = Connection.NewByKey("CorrespondenceSystem");

        var OutgoingLettersCount = c.Query<int>(@"Select count(letterType) from Letter where lettertype = 0").FirstOrDefault();

        model.CountOutgoingLetters = OutgoingLettersCount;

        return View(MVC.Views.Common.Dashboard.Chart.OutgoingLetter.OutgoingLetterIndex, model);
    }
}
