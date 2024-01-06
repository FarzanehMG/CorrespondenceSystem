using CorrespondenceSystem.Modules.LetterDB.DTO;
using CorrespondenceSystem.Modules.LetterDB.Letter;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Serenity.Reporting;
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;
using System.Globalization;
using System.IO;
using System.Text.RegularExpressions;
using MyRow = CorrespondenceSystem.LetterDB.LetterRow;

namespace CorrespondenceSystem.LetterDB.Endpoints;

[Route("Services/LetterDB/Letter/[action]")]
[ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
public class LetterEndpoint : ServiceEndpoint
{

    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly IWebHostEnvironment _webHostEnvironment;

    public LetterEndpoint(IWebHostEnvironment webHostEnvironment, IHttpContextAccessor httpContextAccessor)
    {
        _webHostEnvironment = webHostEnvironment;
        _httpContextAccessor = httpContextAccessor;
    }

    [HttpPost, AuthorizeCreate(typeof(MyRow))]
    public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request,
        [FromServices] ILetterSaveHandler handler)
    {
        return handler.Create(uow, request);
    }

    [HttpPost, AuthorizeUpdate(typeof(MyRow))]
    public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request,
        [FromServices] ILetterSaveHandler handler)
    {
        return handler.Update(uow, request);
    }
 
    [HttpPost, AuthorizeDelete(typeof(MyRow))]
    public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request,
        [FromServices] ILetterDeleteHandler handler)
    {
        return handler.Delete(uow, request);
    }

    [HttpPost]
    public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request,
        [FromServices] ILetterRetrieveHandler handler)
    {
        return handler.Retrieve(connection, request);
    }

    [HttpPost, AuthorizeList(typeof(MyRow))]
    public ListResponse<MyRow> List(IDbConnection connection, ListRequest request,
        [FromServices] ILetterListHandler handler)
    {
        return handler.List(connection, request);
    }

    [HttpPost, AuthorizeList(typeof(MyRow))]
    public FileContentResult ListExcel(IDbConnection connection, ListRequest request,
        [FromServices] ILetterListHandler handler,
        [FromServices] IExcelExporter exporter)
    {
        var data = List(connection, request, handler).Entities;
        var bytes = exporter.Export(data, typeof(Columns.LetterColumns), request.ExportColumns);
        return ExcelContentResult.Create(bytes, "LetterList_" +
            DateTime.Now.ToString("yyyyMMdd_HHmmss", CultureInfo.InvariantCulture) + ".xlsx");
    }


    [HttpPost]
    public Guid SetDefaultRecriverSender()
    {
        var res=  new LetterRepository(Context).GetDefaultRecriverSenderId(HttpContext);
        return res;
    }

    [HttpPost]
    public Guid SetDefaultTemplate()
    {
        var res = new LetterRepository(Context).GetDefaultTemplate(HttpContext);
        return res;
    }

    [HttpPost]
    public identifiregenViewModel SetDefaultIdentifireGen()
    {
        var res = new LetterRepository(Context).GetDefaultIdentifireGen(HttpContext);
        return res;
    }


    [HttpPost]
    public ActionResult DownloadWordLetter([FromBody] DownloadRequest request)
    {
        // Open a new Word document
        WordDocument document = new WordDocument();
        // Fetch data from the database
        DownloadLetter letterData = new LetterRepository(Context).DownloadWordLetter(request, _httpContextAccessor.HttpContext);

        string basePath = _webHostEnvironment.WebRootPath;

        // Save the Word document to a specific folder in your project
        string folderPath = Path.Combine(basePath, "LetterTemplate");
        string filePath = Path.Combine(folderPath, "BookingDetails.docx");

        // Ensure the folder exists, create it if not
        Directory.CreateDirectory(folderPath);

        using FileStream fileStream = new(filePath, FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
        document.Open(fileStream, FormatType.Automatic);

        //Update Template

        TextSelection textSelection = document.Find("xx_letterData_CreatedDate", false, true);
        WTextRange textRange = textSelection.GetAsOneRange();
        textRange.Text = letterData.CreatedDate.ToString() ?? string.Empty;

        textSelection = document.Find("xx_letterData_LetterIdentifier", false, true);
        textRange = textSelection.GetAsOneRange();
        textRange.Text = letterData.LetterIdentifier ?? string.Empty;

        textSelection = document.Find("xx_letterData_attachment", false, true);
        textRange = textSelection.GetAsOneRange();
        textRange.Text = letterData.HasAttachmentText ?? string.Empty;

        textSelection = document.Find("xx_letterData_ReceiverTitle", false, true);
        textRange = textSelection.GetAsOneRange();
        textRange.Text = letterData.ReceiverTitle ?? string.Empty;

        textSelection = document.Find("xx_letterData_GrandSubjectTitle", false, true);
        textRange = textSelection.GetAsOneRange();
        textRange.Text = letterData.GrandSubjectTitle ?? string.Empty;

        textSelection = document.Find("xx_letterData_LetterContent", false, true);
        textRange = textSelection.GetAsOneRange();
        textRange.Text = letterData.LetterContent ?? string.Empty;


            //Finds all the image placeholder text in the Word document.
            TextSelection[] textSelections = document.FindAll(new Regex("Sign"));
            for (int i = 0; i < textSelections.Length; i++)
            {
                //Replaces the image placeholder text with desired image.
                WParagraph paragraph = new WParagraph(document);
                string folderPathImage = Path.Combine(basePath, "Image");
                FileStream imageStream = new FileStream(Path.GetFullPath(folderPathImage + "/" + textSelections[i].SelectedText + ".jpg"), FileMode.Open, FileAccess.ReadWrite);
                WPicture picture = paragraph.AppendPicture(imageStream) as WPicture;
                // Set layout options for the image
                picture.TextWrappingStyle = TextWrappingStyle.Square;
                picture.VerticalOrigin = VerticalOrigin.Paragraph;
                picture.Height = picture.WidthScale;
                picture.Width = 200;
                TextBodyPart bodyPart = new TextBodyPart(document);
                bodyPart.BodyItems.Add(paragraph);
                document.Replace(textSelections[i].SelectedText, bodyPart, true, true);
            }

        // Save the Word document to a specific folder in your project
        string saveFolderPath = Path.Combine(_webHostEnvironment.WebRootPath, "FileName");

        // Get the current date and time
        DateTime currentDate = DateTime.Now;

        // Format the date to include in the filename
        string formattedDate = currentDate.ToString("yyyyMMdd_HHmmss");

        // Combine the formatted date with the filename
        string saveFilePath = Path.Combine(saveFolderPath, $"Letter_{formattedDate}.docx");

        // Ensure the folder exists, create it if not
        Directory.CreateDirectory(folderPath);

        // Save the document to the specified path
        using (FileStream fileStreams = new FileStream(saveFilePath, FileMode.Create))
        {
            document.Save(fileStreams, FormatType.Docx);
        }



        using DocIORenderer renderer = new();
        MemoryStream stream = new();

        document.Save(stream, FormatType.Docx);
        stream.Position = 0;

        return File(stream, "application/docx", "BookingDetailsTest.docx");


    }

}