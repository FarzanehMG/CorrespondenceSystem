using Serenity.ComponentModel;
using System;

namespace CorrespondenceSystem.SignDB.Forms;

[FormScript("SignDB.Sign")]
[BasedOnRow(typeof(SignRow), CheckNames = true)]
public class SignForm
{
    public string Title { get; set; }
    public string SignAttachment { get; set; }
}