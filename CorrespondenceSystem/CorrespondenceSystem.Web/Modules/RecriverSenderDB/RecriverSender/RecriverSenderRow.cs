using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.RecriverSenderDB;

[ConnectionKey("CorrespondenceSystem"), Module("RecriverSenderDB"), TableName("RecriverSender")]
[DisplayName("Recriver Sender"), InstanceName("Recriver Sender")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class RecriverSenderRow : Row<RecriverSenderRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), PrimaryKey, NotNull, IdProperty]
    public Guid? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Name"), Size(200), NotNull, QuickSearch, NameProperty]
    public string Name { get => fields.Name[this]; set => fields.Name[this] = value; }

    [DisplayName("Is Default")]
    public bool? IsDefault { get => fields.IsDefault[this]; set => fields.IsDefault[this] = value; }

    [DisplayName("Created Date")]
    public DateTime? CreatedDate { get => fields.CreatedDate[this]; set => fields.CreatedDate[this] = value; }

    [DisplayName("Creator User Name"), Size(100)]
    public string CreatorUserName { get => fields.CreatorUserName[this]; set => fields.CreatorUserName[this] = value; }

    [DisplayName("Modified Date")]
    public DateTime? ModifiedDate { get => fields.ModifiedDate[this]; set => fields.ModifiedDate[this] = value; }

    [DisplayName("Modified User Name"), Size(100)]
    public string ModifiedUserName { get => fields.ModifiedUserName[this]; set => fields.ModifiedUserName[this] = value; }

    //[DisplayName("Time Stamp"), Insertable(false), Updatable(false), NotNull]
    //public byte[] TimeStamp { get => fields.TimeStamp[this]; set => fields.TimeStamp[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public GuidField Id;
        public StringField Name;
        public BooleanField IsDefault;
        public DateTimeField CreatedDate;
        public StringField CreatorUserName;
        public DateTimeField ModifiedDate;
        public StringField ModifiedUserName;
        public ByteArrayField TimeStamp;

    }
}