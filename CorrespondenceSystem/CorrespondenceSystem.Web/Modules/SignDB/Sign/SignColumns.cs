using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.SignDB.Columns;

[ColumnsScript("SignDB.Sign")]
[BasedOnRow(typeof(SignRow), CheckNames = true)]
public class SignColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public Guid Id { get; set; }
    [EditLink]
    public string Title { get; set; }
    public string SignAttachment { get; set; }
    public DateTime CreatedDate { get; set; }
    public string CreatorUserName { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string ModifiedUserName { get; set; }
    public int UserId { get; set; }
    public bool IsLast { get; set; }
}