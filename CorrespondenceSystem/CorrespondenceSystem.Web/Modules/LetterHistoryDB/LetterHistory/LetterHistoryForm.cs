using Serenity.ComponentModel;
using System;

namespace CorrespondenceSystem.LetterHistoryDB.Forms;

[FormScript("LetterHistoryDB.LetterHistory")]
[BasedOnRow(typeof(LetterHistoryRow), CheckNames = true)]
public class LetterHistoryForm
{
    public Guid LetterId { get; set; }
    public short ActionType { get; set; }
    public Guid TemplateId { get; set; }
    public Guid ReceiverId { get; set; }
    public Guid SenderId { get; set; }
    public Guid GrandSubjectId { get; set; }
    public string LetterIdentifier { get; set; }
    public string LetterIdentifierGen { get; set; }
    public string LetterNo { get; set; }
    public string Title { get; set; }
    public string LetterContent { get; set; }
    public string Tag { get; set; }
    public short LetterType { get; set; }
    public short State { get; set; }
    public short PriorityState { get; set; }
    public bool HasAttachment { get; set; }
    public DateTime CreatedDate { get; set; }
    public string CreatorUserName { get; set; }
    public DateTime ModifiedDate { get; set; }
    public DateTime ModifiedUserName { get; set; }
    public string LetterCarrier { get; set; }
}