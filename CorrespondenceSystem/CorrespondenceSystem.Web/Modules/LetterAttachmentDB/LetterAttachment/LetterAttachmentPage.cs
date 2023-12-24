using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace CorrespondenceSystem.LetterAttachmentDB.Pages;

[PageAuthorize(typeof(LetterAttachmentRow))]
public class LetterAttachmentPage : Controller
{
    [Route("LetterAttachmentDB/LetterAttachment")]
    public ActionResult Index()
    {
        return this.GridPage("@/LetterAttachmentDB/LetterAttachment/LetterAttachmentPage",
            LetterAttachmentRow.Fields.PageTitle());
    }
}