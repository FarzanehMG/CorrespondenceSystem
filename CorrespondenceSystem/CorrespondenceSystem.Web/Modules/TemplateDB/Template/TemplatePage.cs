using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace CorrespondenceSystem.TemplateDB.Pages;

[PageAuthorize(typeof(TemplateRow))]
public class TemplatePage : Controller
{
    [Route("TemplateDB/Template")]
    public ActionResult Index()
    {
        return this.GridPage("@/TemplateDB/Template/TemplatePage",
            TemplateRow.Fields.PageTitle());
    }
}