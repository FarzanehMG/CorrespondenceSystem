using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.CounterpartDB.Columns;

[ColumnsScript("CounterpartDB.Counterpart")]
[BasedOnRow(typeof(CounterpartRow), CheckNames = true)]
public class CounterpartColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public Guid Id { get; set; }
    public string LetterIdentifier { get; set; }
    public string ReciverName { get; set; }
    public short CopyType { get; set; }
    public DateTime CreatedDate { get; set; }
    [EditLink]
    public string CreatorUserName { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string ModifiedUserName { get; set; }
}