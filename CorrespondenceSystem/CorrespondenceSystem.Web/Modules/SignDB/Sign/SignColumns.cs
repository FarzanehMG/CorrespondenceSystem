using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.SignDB.Columns;

[ColumnsScript("SignDB.Sign")]
[BasedOnRow(typeof(SignRow), CheckNames = true)]
public class SignColumns
{
    [EditLink]
    public string Title { get; set; }
    public string SignAttachment { get; set; }
    //public DateTime CreatedDate { get; set; }
    public bool IsLast { get; set; }
}