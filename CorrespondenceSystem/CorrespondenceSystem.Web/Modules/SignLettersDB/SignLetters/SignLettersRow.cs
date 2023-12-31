using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.SignLettersDB;

[ConnectionKey("CorrespondenceSystem"), Module("SignLettersDB"), TableName("SignedLetters")]
[DisplayName("Sign Letters"), InstanceName("Sign Letters")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class SignLettersRow : Row<SignLettersRow.RowFields>, IIdRow, INameRow , IIsActiveRow, ILoggingRow
{
    const string jLetter = nameof(jLetter);
    const string jSign = nameof(jSign);

    [DisplayName("Sign Letter Id"), NotNull, Identity]
    public int? SignLetterId { get => fields.SignLetterId[this]; set => fields.SignLetterId[this] = value; }

    [DisplayName("Id"), PrimaryKey, NotNull, IdProperty]
    public Guid? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Letter"), NotNull, ForeignKey(typeof(LetterDB.LetterRow)), LeftJoin(jLetter), TextualField(nameof(LetterIdentifier))]
    [ServiceLookupEditor(typeof(LetterDB.LetterRow), Service = "LetterDB/Letter/List")]
    public Guid? LetterId { get => fields.LetterId[this]; set => fields.LetterId[this] = value; }

    [DisplayName("Sign"), NotNull, ForeignKey(typeof(SignDB.SignRow)), LeftJoin(jSign), TextualField(nameof(SignTitle))]
    [ServiceLookupEditor(typeof(SignDB.SignRow))]
    public Guid? SignId { get => fields.SignId[this]; set => fields.SignId[this] = value; }

    [DisplayName("Sign Type")]
    public short? SignType { get => fields.SignType[this]; set => fields.SignType[this] = value; }

    [DisplayName("Sign Date")]
    public DateTime? SignDate { get => fields.SignDate[this]; set => fields.SignDate[this] = value; }

    [DisplayName("Created Date")]
    public DateTime? CreatedDate { get => fields.CreatedDate[this]; set => fields.CreatedDate[this] = value; }

    [DisplayName("Creator User Name"), Size(200), QuickSearch, NameProperty]
    public string CreatorUserName { get => fields.CreatorUserName[this]; set => fields.CreatorUserName[this] = value; }

    [DisplayName("Modified Date")]
    public DateTime? ModifiedDate { get => fields.ModifiedDate[this]; set => fields.ModifiedDate[this] = value; }

    [DisplayName("Modified User Name"), Size(200)]
    public string ModifiedUserName { get => fields.ModifiedUserName[this]; set => fields.ModifiedUserName[this] = value; }

    [DisplayName("Letter Letter Identifier"), Origin(jLetter, nameof(LetterDB.LetterRow.LetterIdentifier))]
    public string LetterIdentifier { get => fields.LetterIdentifier[this]; set => fields.LetterIdentifier[this] = value; }

    [DisplayName("Sign Title"), Origin(jSign, nameof(SignDB.SignRow.Title))]
    public string SignTitle { get => fields.SignTitle[this]; set => fields.SignTitle[this] = value; }

    [DisplayName("Is Active")]
    public short? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    public Int16Field IsActiveField => fields.IsActive;

    public Field UpdateUserIdField => fields.ModifiedUserName;

    public DateTimeField UpdateDateField => fields.ModifiedDate;

    public Field InsertUserIdField => fields.CreatorUserName;

    public DateTimeField InsertDateField => fields.CreatedDate;

    public class RowFields : RowFieldsBase
    {
        public GuidField Id;
        public GuidField LetterId;
        public GuidField SignId;
        public Int16Field SignType;
        public DateTimeField SignDate;
        public DateTimeField CreatedDate;
        public StringField CreatorUserName;
        public DateTimeField ModifiedDate;
        public StringField ModifiedUserName;
        public Int16Field IsActive;

        public StringField LetterIdentifier;
        public StringField SignTitle;

        public Int32Field SignLetterId;
    }
}