using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace CorrespondenceSystem.RelatedLettersDB.Columns;

[ColumnsScript("RelatedLettersDB.RelatedLetters")]
[BasedOnRow(typeof(RelatedLettersRow), CheckNames = true)]
public class RelatedLettersColumns
{
    [EditLink, DisplayName("Letter Identifire"), AlignRight]
    
    public string LetterIdentifier { get; set; }
   
    public short RelationType { get; set; }
    public DateTime CreatedDate { get; set; }
    

}