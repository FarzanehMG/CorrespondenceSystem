using CorrespondenceSystem.LetterAttachmentDB;
using Serenity.ComponentModel;
using System;

namespace CorrespondenceSystem.LetterDB.Forms;

[FormScript("LetterDB.Letter")]
[BasedOnRow(typeof(LetterRow), CheckNames = true)]
public class LetterForm
{
    public bool UseDefaultTemplate { get; set; }
    //public Guid TemplateId { get; set; }
    public Guid SenderId { get; set; }
    public Guid ReceiverId { get; set; }
    public Guid GrandSubjectId { get; set; }
    public string LetterIdentifier { get; set; }
    //public string LetterIdentifierGen { get; set; }
    public string LetterNo { get; set; }
    public string Title { get; set; }
    public string LetterContent { get; set; }
    public string Tag { get; set; }
    //public short LetterType { get; set; }
    //public short State { get; set; }
    //public short PriorityState { get; set; }
    //public short ConfidentialLevel { get; set; }
    public bool HasAttachment { get; set; }
    //public DateTime CreatedDate { get; set; }
    //public string CreatorUserName { get; set; }
    //public DateTime ModifiedDate { get; set; }
    //public DateTime ModifiedUserName { get; set; }
    //public byte[] TimeStamp { get; set; }
    public string LetterCarrier { get; set; }
    public bool NeedAnswer { get; set; }
    public string LetterFile { get; set; }

    [Category("Letter Attachment Details")]
    //[OrderDetailsEditor]
    [LetterAttachmentRowEditor]
    public List<LetterAttachmentRow> DetailList { get; set; }
}