using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.LetterAttachmentDB.Columns;

[ColumnsScript("LetterAttachmentDB.LetterAttachment")]
[BasedOnRow(typeof(LetterAttachmentRow), CheckNames = true)]
public class LetterAttachmentColumns
{

    [EditLink]
    public string Title { get; set; }
    public string AttachmentFile { get; set; }

}