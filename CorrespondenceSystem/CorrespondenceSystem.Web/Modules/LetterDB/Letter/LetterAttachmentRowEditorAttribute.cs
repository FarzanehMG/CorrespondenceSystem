namespace CorrespondenceSystem.LetterDB.Forms;


public partial class LetterAttachmentRowEditorAttribute : CustomEditorAttribute
{
    public const string Key = "CorrespondenceSystem.LetterAttachmentDB.LetterAttachmentEditor";

    public LetterAttachmentRowEditorAttribute()
        : base(Key)
    {
    }
}