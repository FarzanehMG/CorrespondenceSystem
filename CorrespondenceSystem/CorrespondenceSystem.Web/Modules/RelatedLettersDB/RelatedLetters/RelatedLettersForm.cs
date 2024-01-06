using CorrespondenceSystem.LetterDB.Forms;
using CorrespondenceSystem.Modules.Enums.Letter;
using Serenity.ComponentModel;
using System;

namespace CorrespondenceSystem.RelatedLettersDB.Forms;

[FormScript("RelatedLettersDB.RelatedLetters")]
[BasedOnRow(typeof(RelatedLettersRow), CheckNames = true)]
public class RelatedLettersForm
{


    public Guid RelatedLetterId { get; set; }
    public RelationTypes RelationType { get; set; }

}