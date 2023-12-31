using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.CounterpartDB;

[ConnectionKey("CorrespondenceSystem"), Module("CounterpartDB"), TableName("Counterpart")]
[DisplayName("Counterpart"), InstanceName("Counterpart")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class CounterpartRow : Row<CounterpartRow.RowFields>, IIdRow, INameRow, IIsActiveRow, ILoggingRow
{
    const string jLetter = nameof(jLetter);
    const string jReciver = nameof(jReciver);

    [DisplayName("Id"), PrimaryKey, NotNull, IdProperty]
    public Guid? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Letter"), NotNull, ForeignKey(typeof(LetterDB.LetterRow)), LeftJoin(jLetter), TextualField(nameof(LetterIdentifier))]
    [ServiceLookupEditor(typeof(LetterDB.LetterRow), Service = "LetterDB/Letter/List")]
    public Guid? LetterId { get => fields.LetterId[this]; set => fields.LetterId[this] = value; }

    [DisplayName("Reciver"), NotNull, ForeignKey(typeof(RecriverSenderDB.RecriverSenderRow)), LeftJoin(jReciver)]
    [TextualField(nameof(ReciverName))]
    [ServiceLookupEditor(typeof(RecriverSenderDB.RecriverSenderRow), Service = "RecriverSenderDB/RecriverSender/List")]
    public Guid? ReciverId { get => fields.ReciverId[this]; set => fields.ReciverId[this] = value; }

    [DisplayName("Copy Type")]
    public short? CopyType { get => fields.CopyType[this]; set => fields.CopyType[this] = value; }

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

    [DisplayName("Reciver Name"), Origin(jReciver, nameof(RecriverSenderDB.RecriverSenderRow.Name))]
    public string ReciverName { get => fields.ReciverName[this]; set => fields.ReciverName[this] = value; }
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
        public GuidField ReciverId;
        public Int16Field CopyType;
        public DateTimeField CreatedDate;
        public StringField CreatorUserName;
        public DateTimeField ModifiedDate;
        public StringField ModifiedUserName;
        public Int16Field IsActive;

        public StringField LetterIdentifier;
        public StringField ReciverName;
    }
}