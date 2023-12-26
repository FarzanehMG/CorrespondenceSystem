using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.SignLettersDB.Columns;

[ColumnsScript("SignLettersDB.SignLetters")]
[BasedOnRow(typeof(SignLettersRow), CheckNames = true)]
public class SignLettersColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public Guid Id { get; set; }
    public string LetterIdentifier { get; set; }
    public string SignTitle { get; set; }
    public short SignType { get; set; }
    public DateTime SignDate { get; set; }
    public DateTime CreatedDate { get; set; }
    [EditLink]
    public string CreatorUserName { get; set; }
    public string ModifiedUserName { get; set; }
}