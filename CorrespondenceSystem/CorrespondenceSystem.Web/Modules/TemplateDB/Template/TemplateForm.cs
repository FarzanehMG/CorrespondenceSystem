using Serenity.ComponentModel;
using System;

namespace CorrespondenceSystem.TemplateDB.Forms;

[FormScript("TemplateDB.Template")]
[BasedOnRow(typeof(TemplateRow), CheckNames = true)]
public class TemplateForm
{
    [Required]
    public string Title { get; set; }
    [Required]
    public string TemplateFile { get; set; }
    public bool IsDefault { get; set; }
}