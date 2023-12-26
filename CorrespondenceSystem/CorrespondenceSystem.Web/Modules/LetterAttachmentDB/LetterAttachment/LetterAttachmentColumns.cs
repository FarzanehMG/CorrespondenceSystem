using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.LetterAttachmentDB.Columns;

[ColumnsScript("LetterAttachmentDB.LetterAttachment")]
[BasedOnRow(typeof(LetterAttachmentRow), CheckNames = true)]
public class LetterAttachmentColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public Guid Id { get; set; }
    public string LetterIdentifier { get; set; }
    [EditLink]
    public string Title { get; set; }
    public string AttachmentFile { get; set; }
    public DateTime CreatedDate { get; set; }
    public string CreatorUserName { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string ModifiedUserName { get; set; }
}