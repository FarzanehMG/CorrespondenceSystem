using Serenity.ComponentModel;
using System;

namespace CorrespondenceSystem.SignDB.Forms;

[FormScript("SignDB.Sign")]
[BasedOnRow(typeof(SignRow), CheckNames = true)]
public class SignForm
{
    [Required]
    public string Title { get; set; }
    [Required]
    public string SignAttachment { get; set; }
}