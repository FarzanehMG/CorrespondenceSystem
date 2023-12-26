using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.RelatedLettersDB.Columns;

[ColumnsScript("RelatedLettersDB.RelatedLetters")]
[BasedOnRow(typeof(RelatedLettersRow), CheckNames = true)]
public class RelatedLettersColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public Guid Id { get; set; }
    public string LetterIdentifier { get; set; }
    public Guid RelatedLetterId { get; set; }
    public short RelationType { get; set; }
    public DateTime CreatedDate { get; set; }
    [EditLink]
    public string CreatorUserName { get; set; }
    public DateTime ModifiedDate { get; set; }
    public string ModifiedUserName { get; set; }
}