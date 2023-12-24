using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.LetterAttachmentDB;

[ConnectionKey("CorrespondenceSystem"), Module("LetterAttachmentDB"), TableName("LetterAttachment")]
[DisplayName("Letter Attachment"), InstanceName("Letter Attachment")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class LetterAttachmentRow : Row<LetterAttachmentRow.RowFields>, IIdRow, INameRow
{
    const string jLetter = nameof(jLetter);

    [DisplayName("Id"), PrimaryKey, NotNull, IdProperty]
    public Guid? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Letter"), NotNull, ForeignKey(typeof(LetterDB.LetterRow)), LeftJoin(jLetter), TextualField(nameof(LetterIdentifier))]
    [ServiceLookupEditor(typeof(LetterDB.LetterRow))]
    public Guid? LetterId { get => fields.LetterId[this]; set => fields.LetterId[this] = value; }

    [DisplayName("Title"), Size(200), QuickSearch, NameProperty]
    public string Title { get => fields.Title[this]; set => fields.Title[this] = value; }

    [DisplayName("Attachment File"), Size(200)]
    public string AttachmentFile { get => fields.AttachmentFile[this]; set => fields.AttachmentFile[this] = value; }

    [DisplayName("Created Date")]
    public DateTime? CreatedDate { get => fields.CreatedDate[this]; set => fields.CreatedDate[this] = value; }

    [DisplayName("Creator User Name"), Size(50)]
    public string CreatorUserName { get => fields.CreatorUserName[this]; set => fields.CreatorUserName[this] = value; }

    [DisplayName("Modified Date")]
    public DateTime? ModifiedDate { get => fields.ModifiedDate[this]; set => fields.ModifiedDate[this] = value; }

    [DisplayName("Modified User Name"), Size(50)]
    public string ModifiedUserName { get => fields.ModifiedUserName[this]; set => fields.ModifiedUserName[this] = value; }

    [DisplayName("Time Stamp"), Insertable(false), Updatable(false), NotNull]
    public byte[] TimeStamp { get => fields.TimeStamp[this]; set => fields.TimeStamp[this] = value; }

    [DisplayName("Letter Letter Identifier"), Origin(jLetter, nameof(LetterDB.LetterRow.LetterIdentifier))]
    public string LetterIdentifier { get => fields.LetterIdentifier[this]; set => fields.LetterIdentifier[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public GuidField Id;
        public GuidField LetterId;
        public StringField Title;
        public StringField AttachmentFile;
        public DateTimeField CreatedDate;
        public StringField CreatorUserName;
        public DateTimeField ModifiedDate;
        public StringField ModifiedUserName;
        public ByteArrayField TimeStamp;

        public StringField LetterIdentifier;
    }
}