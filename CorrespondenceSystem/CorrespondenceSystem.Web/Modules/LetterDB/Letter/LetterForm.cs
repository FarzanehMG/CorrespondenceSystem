using CorrespondenceSystem.LetterAttachmentDB;
using CorrespondenceSystem.Modules.Enums.Letter;
using CorrespondenceSystem.SignLettersDB;
using CorrespondenceSystem.CounterpartDB;
using Serenity.ComponentModel;
using System;
using CorrespondenceSystem.RelatedLettersDB;

namespace CorrespondenceSystem.LetterDB.Forms;

[FormScript("LetterDB.Letter")]
[BasedOnRow(typeof(LetterRow), CheckNames = true)]
public class LetterForm
{
    [Width(85), RadioButtonEditor(), OneThirdWidth()]
    public LetterTypes? LetterType { get; set; }
    [TwoThirdWidth()]
    public string Title { get; set; }
    [OneThirdWidth()]
    public string LetterIdentifier { get; set; }
    [OneThirdWidth()]
    public string LetterIdentifierGen { get; set; }
    [OneThirdWidth()]
    public string LetterNo { get; set; }
    [OneThirdWidth(), RadioButtonEditor()]
    public PriorityStates? PriorityState { get; set; }
    [OneThirdWidth(), RadioButtonEditor()]
    public ConfidentialLevels? ConfidentialLevel { get; set; }
    [OneThirdWidth()]
    public States State { get; set; }
    [HalfWidth]
    public Guid SenderId { get; set; }
    [HalfWidth]
    public Guid ReceiverId { get; set; }
    [OneThirdWidth()]
    public Guid GrandSubjectId { get; set; }
    [OneThirdWidth(), BooleanEditor()]
    public bool UseDefaultTemplate { get; set; }
    [OneThirdWidth()]
    public Guid TemplateId { get; set; }
    public string ListOfAttendees { get; set; }
    [TextAreaEditor(), FullWidth()]
    public string LetterContent { get; set; }
    public string Tag { get; set; }
    public string LetterCarrier { get; set; }
    [OneThirdWidth(), BooleanEditor()]
    public bool HasAttachment { get; set; }
    [OneThirdWidth(), BooleanEditor()]
    public bool NeedAnswer { get; set; }



    [Tab("Letter Attachment")]
    //[Category("Letter Attachment Details")]
    //[OrderDetailsEditor]
    [LetterAttachmentRowEditor]
    public List<LetterAttachmentRow> DetailList { get; set; }

    [Tab("SignLetters")]
    [SignLettersRowEditor]
    public List<SignLettersRow> SignLettersDetailList { get; set; }

    [Tab("Letter File")]
    public String LetterFile { get; set; }
    [Tab("CounterPart")]
    [CounterpartEditor]
    public List<CounterpartRow> CounterpartDetailList { get; set; }
    [Tab("RelatedLetter")]
    [RelatedLetterEditor]
    public List<RelatedLettersRow> RelatedLetterDetailList { get; set; }


    /*[Category("Type"), RadioButtonEditor(), OneThirdWidth]
    public LetterTypes? LetterType { get; set; }
    [OneThirdWidth(), RadioButtonEditor()]
    public PriorityStates? PriorityState { get; set; }
    [OneThirdWidth(), RadioButtonEditor()]
    public ConfidentialLevels? ConfidentialLevel { get; set; }

    [HalfWidth]
    public string LetterIdentifier { get; set; }
    [HalfWidth]
    public string LetterIdentifierGen { get; set; }

    [HalfWidth]
    public Guid ReceiverId { get; set; }

    [HalfWidth]
    public Guid SenderId { get; set; }




    [Category("Template"), OneThirdWidth(), BooleanEditor()]
    public bool UseDefaultTemplate { get; set; }
    [TwoThirdWidth()]
    public Guid TemplateId { get; set; }




    [Category("letter"), OneThirdWidth()]

    public string LetterNo { get; set; }
    [OneThirdWidth()]
    public string Title { get; set; }
    [TextAreaEditor(), FullWidth()]
    public string LetterContent { get; set; }
    public string Tag { get; set; }
    public string LetterCarrier { get; set; }
    [OneThirdWidth()]
    public States State { get; set; }
    [TwoThirdWidth()]
    public Guid GrandSubjectId { get; set; }
    [OneThirdWidth(), BooleanEditor()]
    public bool HasAttachment { get; set; }
    [OneThirdWidth(), BooleanEditor()]
    public bool NeedAnswer { get; set; }




    [Tab("Letter Attachment")]
    //[Category("Letter Attachment Details")]
    //[OrderDetailsEditor]
    [LetterAttachmentRowEditor]
    public List<LetterAttachmentRow> DetailList { get; set; }

    [Tab("SignLetters")]
    [SignLettersRowEditor]
    public List<SignLettersRow> SignLettersDetailList { get; set; }

    [Tab("Letter File")]
    public String LetterFile { get; set; }
    [Tab("CounterPart")]
    [CounterpartEditor]
    public List<CounterpartRow> CounterpartDetailList { get; set; }
    [Tab("RelatedLetter")]
    [RelatedLetterEditor]
    public List<RelatedLettersRow> RelatedLetterDetailList { get; set; }*/


}