using Serenity.ComponentModel;
using System;

namespace CorrespondenceSystem.CounterpartDB.Forms;

[FormScript("CounterpartDB.Counterpart")]
[BasedOnRow(typeof(CounterpartRow), CheckNames = true)]
public class CounterpartForm
{
    public Guid LetterId { get; set; }
    public Guid ReciverId { get; set; }
    public short CopyType { get; set; }
    public DateTime CreatedDate { get; set; }
    public string CreatorUserName { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string ModifiedUserName { get; set; }
}