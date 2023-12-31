using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.RelatedLettersDB;

[ConnectionKey("CorrespondenceSystem"), Module("RelatedLettersDB"), TableName("RelatedLetters")]
[DisplayName("Related Letters"), InstanceName("Related Letters")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class RelatedLettersRow : Row<RelatedLettersRow.RowFields>, IIdRow, INameRow
{
    const string jLetter = nameof(jLetter);

    [DisplayName("Id"), PrimaryKey, NotNull, IdProperty]
    public Guid? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Letter"), NotNull, ForeignKey(typeof(LetterDB.LetterRow)), LeftJoin(jLetter), TextualField(nameof(LetterIdentifier))]
    [ServiceLookupEditor(typeof(LetterDB.LetterRow), Service = "LetterDB/Letter/List")]
    public Guid? LetterId { get => fields.LetterId[this]; set => fields.LetterId[this] = value; }

    [DisplayName("Related Letter Id"), NotNull]
    public Guid? RelatedLetterId { get => fields.RelatedLetterId[this]; set => fields.RelatedLetterId[this] = value; }

    [DisplayName("Relation Type"), NotNull]
    public short? RelationType { get => fields.RelationType[this]; set => fields.RelationType[this] = value; }

    [DisplayName("Created Date")]
    public DateTime? CreatedDate { get => fields.CreatedDate[this]; set => fields.CreatedDate[this] = value; }

    [DisplayName("Creator User Name"), Size(50), QuickSearch, NameProperty]
    public string CreatorUserName { get => fields.CreatorUserName[this]; set => fields.CreatorUserName[this] = value; }

    [DisplayName("Modified Date")]
    public DateTime? ModifiedDate { get => fields.ModifiedDate[this]; set => fields.ModifiedDate[this] = value; }

    [DisplayName("Modified User Name"), Size(50)]
    public string ModifiedUserName { get => fields.ModifiedUserName[this]; set => fields.ModifiedUserName[this] = value; }

    [DisplayName("Letter Letter Identifier"), Origin(jLetter, nameof(LetterDB.LetterRow.LetterIdentifier))]
    public string LetterIdentifier { get => fields.LetterIdentifier[this]; set => fields.LetterIdentifier[this] = value; }
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
        public GuidField RelatedLetterId;
        public Int16Field RelationType;
        public DateTimeField CreatedDate;
        public StringField CreatorUserName;
        public DateTimeField ModifiedDate;
        public StringField ModifiedUserName;

        public StringField LetterIdentifier;
    }
}