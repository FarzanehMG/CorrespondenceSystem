using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.SignDB;

[ConnectionKey("CorrespondenceSystem"), Module("SignDB"), TableName("Sign")]
[DisplayName("Sign"), InstanceName("Sign")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class SignRow : Row<SignRow.RowFields>, IIdRow, INameRow , IIsActiveDeletedRow, IIsActiveRow,ILoggingRow
{
    [DisplayName("Id"), PrimaryKey, NotNull, IdProperty]
    public Guid? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Title"), Size(100), QuickSearch, NameProperty]
    public string Title { get => fields.Title[this]; set => fields.Title[this] = value; }

    [DisplayName("Sign Attachment"), Size(200)]
    [FileUploadEditor]
    public string SignAttachment { get => fields.SignAttachment[this]; set => fields.SignAttachment[this] = value; }

    [DisplayName("Created Date")]
    public DateTime? CreatedDate { get => fields.CreatedDate[this]; set => fields.CreatedDate[this] = value; }

    [DisplayName("Creator User Name"), Size(200)]
    public string CreatorUserName { get => fields.CreatorUserName[this]; set => fields.CreatorUserName[this] = value; }

    [DisplayName("Modified Date")]
    public DateTime? ModifiedDate { get => fields.ModifiedDate[this]; set => fields.ModifiedDate[this] = value; }

    [DisplayName("Modified User Name"), Size(200)]
    public string ModifiedUserName { get => fields.ModifiedUserName[this]; set => fields.ModifiedUserName[this] = value; }

    [DisplayName("User Id")]
    public int? UserId { get => fields.UserId[this]; set => fields.UserId[this] = value; }

    [DisplayName("Is Last")]
    public bool? IsLast { get => fields.IsLast[this]; set => fields.IsLast[this] = value; }

    [DisplayName("Is Active")]
    public short? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    public Int16Field IsActiveField => Fields.IsActive;

    public Field UpdateUserIdField => fields.ModifiedUserName;

    public DateTimeField UpdateDateField => fields.ModifiedDate;

    public Field InsertUserIdField => fields.CreatorUserName;

    public DateTimeField InsertDateField => fields.CreatedDate;

    public class RowFields : RowFieldsBase
    {
        public GuidField Id;
        public StringField Title;
        public StringField SignAttachment;
        public DateTimeField CreatedDate;
        public StringField CreatorUserName;
        public DateTimeField ModifiedDate;
        public StringField ModifiedUserName;
        public Int32Field UserId;
        public BooleanField IsLast;
        public Int16Field IsActive;

    }
}