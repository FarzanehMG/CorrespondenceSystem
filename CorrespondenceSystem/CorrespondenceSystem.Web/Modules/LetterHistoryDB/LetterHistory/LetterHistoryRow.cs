using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.LetterHistoryDB;

[ConnectionKey("CorrespondenceSystem"), Module("LetterHistoryDB"), TableName("LetterHistory")]
[DisplayName("Letter History"), InstanceName("Letter History")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class LetterHistoryRow : Row<LetterHistoryRow.RowFields>, IIdRow, INameRow
{
    const string jLetter = nameof(jLetter);

    [DisplayName("Id"), PrimaryKey, NotNull, IdProperty]
    public Guid? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Letter"), NotNull, ForeignKey(typeof(LetterDB.LetterRow)), LeftJoin(jLetter)]
    [TextualField(nameof(LetterLetterIdentifier)), ServiceLookupEditor(typeof(LetterDB.LetterRow), Service = "LetterDB/Letter/List")]
    public Guid? LetterId { get => fields.LetterId[this]; set => fields.LetterId[this] = value; }

    [DisplayName("Action Type"), NotNull]
    public short? ActionType { get => fields.ActionType[this]; set => fields.ActionType[this] = value; }

    [DisplayName("Template Id")]
    public Guid? TemplateId { get => fields.TemplateId[this]; set => fields.TemplateId[this] = value; }

    [DisplayName("Receiver Id"), NotNull]
    public Guid? ReceiverId { get => fields.ReceiverId[this]; set => fields.ReceiverId[this] = value; }

    [DisplayName("Sender Id"), NotNull]
    public Guid? SenderId { get => fields.SenderId[this]; set => fields.SenderId[this] = value; }

    [DisplayName("Grand Subject Id"), NotNull]
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

    [DisplayName("Has Attachment")]
    public bool? HasAttachment { get => fields.HasAttachment[this]; set => fields.HasAttachment[this] = value; }

    [DisplayName("Created Date")]
    public DateTime? CreatedDate { get => fields.CreatedDate[this]; set => fields.CreatedDate[this] = value; }

    [DisplayName("Creator User Name"), Size(50)]
    public string CreatorUserName { get => fields.CreatorUserName[this]; set => fields.CreatorUserName[this] = value; }

    [DisplayName("Modified Date")]
    public DateTime? ModifiedDate { get => fields.ModifiedDate[this]; set => fields.ModifiedDate[this] = value; }

    [DisplayName("Modified User Name")]
    public DateTime? ModifiedUserName { get => fields.ModifiedUserName[this]; set => fields.ModifiedUserName[this] = value; }

    [DisplayName("Letter Carrier"), Size(100)]
    public string LetterCarrier { get => fields.LetterCarrier[this]; set => fields.LetterCarrier[this] = value; }

    [DisplayName("Letter Letter Identifier"), Origin(jLetter, nameof(LetterDB.LetterRow.LetterIdentifier))]
    public string LetterLetterIdentifier { get => fields.LetterLetterIdentifier[this]; set => fields.LetterLetterIdentifier[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public GuidField Id;
        public GuidField LetterId;
        public Int16Field ActionType;
        public GuidField TemplateId;
        public GuidField ReceiverId;
        public GuidField SenderId;
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
        public BooleanField HasAttachment;
        public DateTimeField CreatedDate;
        public StringField CreatorUserName;
        public DateTimeField ModifiedDate;
        public DateTimeField ModifiedUserName;
        public StringField LetterCarrier;

        public StringField LetterLetterIdentifier;
    }
}