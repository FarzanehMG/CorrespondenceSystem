using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.TemplateDB.Columns;

[ColumnsScript("TemplateDB.Template")]
[BasedOnRow(typeof(TemplateRow), CheckNames = true)]
public class TemplateColumns
{
    [EditLink]
    public string Title { get; set; }   
    public string TemplateFile { get; set; }

}