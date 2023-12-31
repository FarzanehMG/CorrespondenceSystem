using CorrespondenceSystem.LetterAttachmentDB;
using CorrespondenceSystem.SignLettersDB;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.LetterDB;

[ConnectionKey("CorrespondenceSystem"), Module("LetterDB"), TableName("Letter")]
[DisplayName("Letter"), InstanceName("Letter")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class LetterRow : Row<LetterRow.RowFields>, IIdRow, INameRow, ILoggingRow, IIsActiveRow
{
    const string jTemplate = nameof(jTemplate);
    const string jSender = nameof(jSender);
    const string jReceiver = nameof(jReceiver);
    const string jGrandSubject = nameof(jGrandSubject);

    [DisplayName("Id"), PrimaryKey, NotNull, IdProperty]
    public Guid? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Use Default Template")]
    public bool? UseDefaultTemplate { get => fields.UseDefaultTemplate[this]; set => fields.UseDefaultTemplate[this] = value; }

    [DisplayName("Template"), ForeignKey("Template", "Id"), LeftJoin(jTemplate), TextualField(nameof(TemplateTitle))]
    [LookupEditor(typeof(TemplateDB.TemplateRow))]
    public Guid? TemplateId { get => fields.TemplateId[this]; set => fields.TemplateId[this] = value; }

    [DisplayName("Sender"), NotNull, ForeignKey("RecriverSender", "Id"), LeftJoin(jSender), TextualField(nameof(SenderName))]
    [ServiceLookupEditor(typeof(RecriverSenderDB.RecriverSenderRow))]

    public Guid? SenderId { get => fields.SenderId[this]; set => fields.SenderId[this] = value; }

    [DisplayName("Receiver"), NotNull, ForeignKey("RecriverSender", "Id"), LeftJoin(jReceiver), TextualField(nameof(ReceiverName))]
    [ServiceLookupEditor(typeof(RecriverSenderDB.RecriverSenderRow))]
    public Guid? ReceiverId { get => fields.ReceiverId[this]; set => fields.ReceiverId[this] = value; }

    [DisplayName("Grand Subject"), NotNull, ForeignKey("GrandSubject", "Id"), LeftJoin(jGrandSubject)]
    [TextualField(nameof(GrandSubjectTitle))]
    [ServiceLookupEditor(typeof(GrandSubjectDB.GrandSubjectRow))]
    public Guid? GrandSubjectId { get => fields.GrandSubjectId[this]; set => fields.GrandSubjectId[this] = value; }

    [DisplayName("Letter Identifier"), Size(100), QuickSearch, NameProperty]
    public string LetterIdentifier { get => fields.LetterIdentifier[this]; set => fields.LetterIdentifier[this] = value; }

    [DisplayName("Letter Identifier Gen"), Size(100)]
    public string LetterIdentifierGen { get => fields.LetterIdentifierGen[this]; set => fields.LetterIdentifierGen[this] = value; }

    [DisplayName("Letter No"), Size(100)]
    public string LetterNo { get => fields.LetterNo[this]; set => fields.LetterNo[this] = value; }

    [DisplayName("Title"), Size(100)]
    public string Title { get => fields.Title[this]; set => fields.Title[this] = value; }

    [DisplayName("Letter Content")]
    public string LetterContent { get => fields.LetterContent[this]; set => fields.LetterContent[this] = value; }

    [DisplayName("Tag"), Size(1000)]
    public string Tag { get => fields.Tag[this]; set => fields.Tag[this] = value; }

    [DisplayName("Letter Type")]
    public short? LetterType { get => fields.LetterType[this]; set => fields.LetterType[this] = value; }

    [DisplayName("State")]
    public short? State { get => fields.State[this]; set => fields.State[this] = value; }

    [DisplayName("Priority State")]
    public short? PriorityState { get => fields.PriorityState[this]; set => fields.PriorityState[this] = value; }

    [DisplayName("Confidential Level")]
    public short? ConfidentialLevel { get => fields.ConfidentialLevel[this]; set => fields.ConfidentialLevel[this] = value; }

    [DisplayName("Has Attachment")]
    public bool? HasAttachment { get => fields.HasAttachment[this]; set => fields.HasAttachment[this] = value; }

    [DisplayName("Created Date")]
    public DateTime? CreatedDate { get => fields.CreatedDate[this]; set => fields.CreatedDate[this] = value; }

    [DisplayName("Creator User Name"), Size(50)]
    public string CreatorUserName { get => fields.CreatorUserName[this]; set => fields.CreatorUserName[this] = value; }

    [DisplayName("Modified Date")]
    public DateTime? ModifiedDate { get => fields.ModifiedDate[this]; set => fields.ModifiedDate[this] = value; }

    [DisplayName("Modified User Name")]
    public string ModifiedUserName { get => fields.ModifiedUserName[this]; set => fields.ModifiedUserName[this] = value; }

    //[DisplayName("Time Stamp"), Insertable(false), Updatable(false), NotNull]
    //public byte[] TimeStamp { get => fields.TimeStamp[this]; set => fields.TimeStamp[this] = value; }

    [DisplayName("Letter Carrier"), Size(100)]
    public string LetterCarrier { get => fields.LetterCarrier[this]; set => fields.LetterCarrier[this] = value; }

    [DisplayName("Need Answer")]
    public bool? NeedAnswer { get => fields.NeedAnswer[this]; set => fields.NeedAnswer[this] = value; }

    [DisplayName("Letter File"), Size(1000)]
    public string LetterFile { get => fields.LetterFile[this]; set => fields.LetterFile[this] = value; }

    [DisplayName("Template Title"), Expression($"{jTemplate}.[Title]")]
    public string TemplateTitle { get => fields.TemplateTitle[this]; set => fields.TemplateTitle[this] = value; }

    [DisplayName("Sender Name"), Expression($"{jSender}.[Name]")]
    public string SenderName { get => fields.SenderName[this]; set => fields.SenderName[this] = value; }

    [DisplayName("Receiver Name"), Expression($"{jReceiver}.[Name]")]
    public string ReceiverName { get => fields.ReceiverName[this]; set => fields.ReceiverName[this] = value; }

    [DisplayName("Grand Subject Title"), Expression($"{jGrandSubject}.[Title]")]
    public string GrandSubjectTitle { get => fields.GrandSubjectTitle[this]; set => fields.GrandSubjectTitle[this] = value; }

    [DisplayName("Is Active")]
    public short? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    [DisplayName("Details"), MasterDetailRelation(foreignKey: nameof(LetterAttachmentRow.LetterId)), NotMapped]
    [MinSelectLevel(SelectLevel.Details)]
    public List<LetterAttachmentRow> DetailList { get => fields.DetailList[this]; set => fields.DetailList[this] = value; }


    [DisplayName("Details"), MasterDetailRelation(foreignKey: nameof(SignLettersRow.LetterId)), NotMapped]
    [MinSelectLevel(SelectLevel.Details)]
    public List<SignLettersRow> SignLettersDetailList { get => fields.SignLettersDetailList[this]; set => fields.SignLettersDetailList[this] = value; }


    public Field UpdateUserIdField => fields.ModifiedUserName;

    public DateTimeField UpdateDateField => fields.ModifiedDate;

    public Field InsertUserIdField => fields.CreatorUserName;

    public DateTimeField InsertDateField => fields.CreatedDate;

    public Int16Field IsActiveField => fields.IsActive;

    public class RowFields : RowFieldsBase
    {
        public GuidField Id;
        public BooleanField UseDefaultTemplate;
        public GuidField TemplateId;
        public GuidField SenderId;
        public GuidField ReceiverId;
        public GuidField GrandSubjectId;
        public StringField LetterIdentifier;
        public StringField LetterIdentifierGen;
        public StringField LetterNo;
        public StringField Title;
        public StringField LetterContent;
        public StringField Tag;
        public Int16Field LetterType;
        public Int16Field State;
        public Int16Field PriorityState;
        public Int16Field ConfidentialLevel;
        public BooleanField HasAttachment;
        public DateTimeField CreatedDate;
        public StringField CreatorUserName;
        public DateTimeField ModifiedDate;
        public StringField ModifiedUserName;
        //public ByteArrayField TimeStamp;
        public StringField LetterCarrier;
        public BooleanField NeedAnswer;
        public StringField LetterFile;

        public StringField TemplateTitle;
        public StringField SenderName;
        public StringField ReceiverName;
        public StringField GrandSubjectTitle;
        public Int16Field IsActive;

        public RowListField<LetterAttachmentRow> DetailList;
        public RowListField<SignLettersRow> SignLettersDetailList;
    }
}