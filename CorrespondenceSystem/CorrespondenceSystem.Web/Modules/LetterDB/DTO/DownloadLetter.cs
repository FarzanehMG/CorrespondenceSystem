using CorrespondenceSystem.LetterAttachmentDB;
using CorrespondenceSystem.LetterDB.Forms;
using CorrespondenceSystem.Modules.Enums.Letter;
using CorrespondenceSystem.SignLettersDB;

namespace CorrespondenceSystem.Modules.LetterDB.DTO;

public class DownloadLetter
{
    public string Title { get; set; }
    public string LetterIdentifier { get; set; }
    public string LetterIdentifierGen { get; set; }
    public string LetterNo { get; set; }
    public string SenderTitle { get; set; }
    public string ReceiverTitle { get; set; }
    public string GrandSubjectTitle { get; set; }
    public string TemplateFile { get; set; }
    public byte[] TemplateFileContent { get; set; }
    public string LetterContent { get; set; }
    public string Tag { get; set; }
    public string LetterCarrier { get; set; }

}
