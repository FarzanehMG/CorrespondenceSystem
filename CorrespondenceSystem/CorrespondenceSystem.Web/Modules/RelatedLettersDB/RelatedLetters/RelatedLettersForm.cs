using Serenity.ComponentModel;
using System;

namespace CorrespondenceSystem.RelatedLettersDB.Forms;

[FormScript("RelatedLettersDB.RelatedLetters")]
[BasedOnRow(typeof(RelatedLettersRow), CheckNames = true)]
public class RelatedLettersForm
{
    public Guid LetterId { get; set; }
    public Guid RelatedLetterId { get; set; }
    public short RelationType { get; set; }
    public DateTime CreatedDate { get; set; }
    public string CreatorUserName { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string ModifiedUserName { get; set; }
}