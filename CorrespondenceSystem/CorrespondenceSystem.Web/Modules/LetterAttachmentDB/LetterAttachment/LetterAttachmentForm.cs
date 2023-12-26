using Serenity.ComponentModel;
using System;

namespace CorrespondenceSystem.LetterAttachmentDB.Forms;

[FormScript("LetterAttachmentDB.LetterAttachment")]
[BasedOnRow(typeof(LetterAttachmentRow), CheckNames = true)]
public class LetterAttachmentForm
{
    public string Title { get; set; }
    public string AttachmentFile { get; set; }

}