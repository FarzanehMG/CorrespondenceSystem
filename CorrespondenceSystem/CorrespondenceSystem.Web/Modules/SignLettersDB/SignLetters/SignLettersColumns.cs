using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.SignLettersDB.Columns;

[ColumnsScript("SignLettersDB.SignLetters")]
[BasedOnRow(typeof(SignLettersRow), CheckNames = true)]
public class SignLettersColumns
{
    [EditLink, DisplayName("Title")]
    public string SignTitle { get; set; }
    public DateTime CreatedDate { get; set; }

}