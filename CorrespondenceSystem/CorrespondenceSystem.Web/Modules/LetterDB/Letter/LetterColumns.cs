using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.LetterDB.Columns;

[ColumnsScript("LetterDB.Letter")]
[BasedOnRow(typeof(LetterRow), CheckNames = true)]
public class LetterColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public Guid Id { get; set; }
    public bool UseDefaultTemplate { get; set; }
    public string TemplateTitle { get; set; }
    public string SenderName { get; set; }
    public string ReceiverName { get; set; }
    public string GrandSubjectTitle { get; set; }
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
    public short ConfidentialLevel { get; set; }
    public bool HasAttachment { get; set; }
    public DateTime CreatedDate { get; set; }
    public string CreatorUserName { get; set; }
    public DateTime ModifiedDate { get; set; }
    public DateTime ModifiedUserName { get; set; }
    //public byte[] TimeStamp { get; set; }
    public string LetterCarrier { get; set; }
    public bool NeedAnswer { get; set; }
    public string LetterFile { get; set; }
}