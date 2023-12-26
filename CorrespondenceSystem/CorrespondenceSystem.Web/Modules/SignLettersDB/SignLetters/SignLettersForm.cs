using Serenity.ComponentModel;
using System;

namespace CorrespondenceSystem.SignLettersDB.Forms;

[FormScript("SignLettersDB.SignLetters")]
[BasedOnRow(typeof(SignLettersRow), CheckNames = true)]
public class SignLettersForm
{
    public Guid LetterId { get; set; }
    public Guid SignId { get; set; }
    public short SignType { get; set; }
    public DateTime SignDate { get; set; }
    public DateTime CreatedDate { get; set; }
    public string CreatorUserName { get; set; }
    public string ModifiedUserName { get; set; }
}