using Serenity.ComponentModel;
using System;

namespace CorrespondenceSystem.TemplateDB.Forms;

[FormScript("TemplateDB.Template")]
[BasedOnRow(typeof(TemplateRow), CheckNames = true)]
public class TemplateForm
{
    public string Title { get; set; }
    public string TemplateFile { get; set; }
    public bool IsDefault { get; set; }
    public DateTime CreatedDate { get; set; }
    public string CreatorUserName { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string ModifiedUserName { get; set; }
}