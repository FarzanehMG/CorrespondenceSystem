using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.TemplateDB.Columns;

[ColumnsScript("TemplateDB.Template")]
[BasedOnRow(typeof(TemplateRow), CheckNames = true)]
public class TemplateColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public Guid Id { get; set; }
    [EditLink]
    public string Title { get; set; }
    public string TemplateFile { get; set; }
    public bool IsDefault { get; set; }
    public DateTime CreatedDate { get; set; }
    public string CreatorUserName { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string ModifiedUserName { get; set; }
}