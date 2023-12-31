using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.RecriverSenderDB.Columns;

[ColumnsScript("RecriverSenderDB.RecriverSender")]
[BasedOnRow(typeof(RecriverSenderRow), CheckNames = true)]
public class RecriverSenderColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public Guid Id { get; set; }
    [EditLink]
    public string Name { get; set; }
    public bool IsDefault { get; set; }
    public DateTime CreatedDate { get; set; }
    public string CreatorUserName { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string ModifiedUserName { get; set; }
    //public byte[] TimeStamp { get; set; }
}