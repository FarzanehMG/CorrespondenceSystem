using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace CorrespondenceSystem.CounterpartDB.Pages;

[PageAuthorize(typeof(CounterpartRow))]
public class CounterpartPage : Controller
{
    [Route("CounterpartDB/Counterpart")]
    public ActionResult Index()
    {
        return this.GridPage("@/CounterpartDB/Counterpart/CounterpartPage",
            CounterpartRow.Fields.PageTitle());
    }
}