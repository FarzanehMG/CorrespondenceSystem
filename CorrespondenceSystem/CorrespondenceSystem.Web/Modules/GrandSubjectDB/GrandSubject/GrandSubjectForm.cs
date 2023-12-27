using Serenity.ComponentModel;
using System;

namespace CorrespondenceSystem.GrandSubjectDB.Forms;

[FormScript("GrandSubjectDB.GrandSubject")]
[BasedOnRow(typeof(GrandSubjectRow), CheckNames = true)]
public class GrandSubjectForm
{
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime CreatedDate { get; set; }
    public string CreatorUserName { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string ModifiedUserName { get; set; }
    //public byte[] TimeStamp { get; set; }
}