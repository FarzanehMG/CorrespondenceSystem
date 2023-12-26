using Serenity.ComponentModel;
using System;

namespace CorrespondenceSystem.SignDB.Forms;

[FormScript("SignDB.Sign")]
[BasedOnRow(typeof(SignRow), CheckNames = true)]
public class SignForm
{
    public string Title { get; set; }
    public string SignAttachment { get; set; }
    public DateTime CreatedDate { get; set; }
    public string CreatorUserName { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string ModifiedUserName { get; set; }
    public int UserId { get; set; }
    public bool IsLast { get; set; }
}