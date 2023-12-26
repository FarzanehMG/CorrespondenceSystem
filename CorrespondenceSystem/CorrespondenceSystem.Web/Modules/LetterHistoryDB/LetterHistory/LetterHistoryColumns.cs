using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.LetterHistoryDB.Columns;

[ColumnsScript("LetterHistoryDB.LetterHistory")]
[BasedOnRow(typeof(LetterHistoryRow), CheckNames = true)]
public class LetterHistoryColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public Guid Id { get; set; }
    public string LetterLetterIdentifier { get; set; }
    public short ActionType { get; set; }
    public Guid TemplateId { get; set; }
    public Guid ReceiverId { get; set; }
    public Guid SenderId { get; set; }
    public Guid GrandSubjectId { get; set; }
    [EditLink]
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