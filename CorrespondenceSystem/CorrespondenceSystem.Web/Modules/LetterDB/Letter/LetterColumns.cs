using CorrespondenceSystem.Modules.Enums.Letter;
using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.LetterDB.Columns;

[ColumnsScript("LetterDB.Letter")]
[BasedOnRow(typeof(LetterRow), CheckNames = true)]
public class LetterColumns
{
    [EditLink]
    public string Title { get; set; }
    public string GrandSubjectTitle { get; set; }
    public string LetterNo { get; set; }
    public States State { get; set; }
    public LetterTypes LetterType { get; set; }

}