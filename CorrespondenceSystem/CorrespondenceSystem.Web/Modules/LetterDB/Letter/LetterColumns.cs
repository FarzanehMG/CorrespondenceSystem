using CorrespondenceSystem.Modules.Enums.Letter;
using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.LetterDB.Columns;

[ColumnsScript("LetterDB.Letter")]
[BasedOnRow(typeof(LetterRow), CheckNames = true)]
[AlignRight]
public class LetterColumns
{
    [EditLink, QuickFilter]
    public string Title { get; set; }
    [QuickFilter]
    public string Tag { get; set; }
    [QuickFilter]
    public string GrandSubjectTitle { get; set; }
    [QuickFilter]
    public string LetterNo { get; set; }
    [QuickFilter]
    public DateTime CreatedDate { get; set; }
    public States State { get; set; }
    public LetterTypes LetterType { get; set; }

}