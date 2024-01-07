using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.CounterpartDB.Columns;

[ColumnsScript("CounterpartDB.Counterpart")]
[BasedOnRow(typeof(CounterpartRow), CheckNames = true)]
public class CounterpartColumns
{
    [EditLink, DisplayName("LetterIdentifier"), AlignRight]
    
    public string LetterIdentifier { get; set; }
    [Width(80)]
    public short CopyType { get; set; }
    public DateTime CreatedDate { get; set; }
    
}
   