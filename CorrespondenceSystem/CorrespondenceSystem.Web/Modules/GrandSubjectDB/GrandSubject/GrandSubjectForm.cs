using Serenity.ComponentModel;
using System;

namespace CorrespondenceSystem.GrandSubjectDB.Forms;

[FormScript("GrandSubjectDB.GrandSubject")]
[BasedOnRow(typeof(GrandSubjectRow), CheckNames = true)]
public class GrandSubjectForm
{

    public string Title { get; set; }
    [Insertable(true)]
    [Updatable]
    [TextAreaEditor]
    public string Description { get; set; }

}