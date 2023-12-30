using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.GrandSubjectDB.Columns;

[ColumnsScript("GrandSubjectDB.GrandSubject")]
[BasedOnRow(typeof(GrandSubjectRow), CheckNames = true)]
public class GrandSubjectColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public Guid Id { get; set; }
    [EditLink]
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime CreatedDate { get; set; }
    public string CreatorUserName { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string ModifiedUserName { get; set; }
    //public byte[] TimeStamp { get; set; }
}