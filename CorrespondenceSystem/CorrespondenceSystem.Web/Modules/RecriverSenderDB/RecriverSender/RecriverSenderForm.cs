using Serenity.ComponentModel;
using System;

namespace CorrespondenceSystem.RecriverSenderDB.Forms;

[FormScript("RecriverSenderDB.RecriverSender")]
[BasedOnRow(typeof(RecriverSenderRow), CheckNames = true)]
public class RecriverSenderForm
{
    public string Name { get; set; }
    public bool IsDefault { get; set; }
    public DateTime CreatedDate { get; set; }
    public string CreatorUserName { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string ModifiedUserName { get; set; }
    public byte[] TimeStamp { get; set; }
}