using Serenity.ComponentModel;
using System;

namespace CorrespondenceSystem.LetterAttachmentDB.Forms;

[FormScript("LetterAttachmentDB.LetterAttachment")]
[BasedOnRow(typeof(LetterAttachmentRow), CheckNames = true)]
public class LetterAttachmentForm
{
    public Guid LetterId { get; set; }
    public string Title { get; set; }
    public string AttachmentFile { get; set; }
    //public DateTime CreatedDate { get; set; }
    //public string CreatorUserName { get; set; }
    //public DateTime ModifiedDate { get; set; }
    //public string ModifiedUserName { get; set; }
    public byte[] TimeStamp { get; set; }
}