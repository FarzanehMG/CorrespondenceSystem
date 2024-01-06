using CorrespondenceSystem.Modules.Enums.Letter;
using Serenity.ComponentModel;
using System;

namespace CorrespondenceSystem.CounterpartDB.Forms;

[FormScript("CounterpartDB.Counterpart")]
[BasedOnRow(typeof(CounterpartRow), CheckNames = true)]
public class CounterpartForm
{

    public Guid ReciverId { get; set; }

    public CopyType CopyType { get; set; }

}