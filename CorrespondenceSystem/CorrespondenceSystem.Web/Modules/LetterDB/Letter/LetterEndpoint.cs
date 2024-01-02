using CorrespondenceSystem.Modules.LetterDB.DTO;
using CorrespondenceSystem.Modules.LetterDB.Letter;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Serenity.Reporting;
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using System.Globalization;
using System.IO;
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
    public ActionResult DownloadWordLetter([FromBody] DownloadRequest request)
    {
        //string letterId = Id;
        // Fetch data from the database
        DownloadLetter letterData = new LetterRepository(Context).DownloadWordLetter(request, _httpContextAccessor.HttpContext);

        // Open a new Word document
        WordDocument document = new WordDocument();

        // Access the section in a Word document
        IWSection section = document.AddSection();

        // Add new paragraph to the section
        IWParagraph paragraph = section.AddParagraph();
        paragraph.ParagraphFormat.FirstLineIndent = 36;
        paragraph.BreakCharacterFormat.FontSize = 12f;

        // Populate the Word document with data from the database
        paragraph.AppendText($"عنوان: {letterData.Title}\n");
        paragraph.AppendText($"شناسه نامه: {letterData.LetterIdentifier}\n");
        paragraph.AppendText($"فرستنده: {letterData.SenderTitle}\n");
        paragraph.AppendText($"گیرنده: {letterData.ReceiverTitle}\n");
        paragraph.AppendText($"موضوع اصلی: {letterData.GrandSubjectTitle}\n");
        paragraph.AppendText($"قالب: {letterData.TemplateTitle}\n");
        paragraph.AppendText($"متن نامه: {letterData.LetterContent}\n");
        paragraph.AppendText($"تگ: {letterData.Tag}\n");
        paragraph.AppendText($"حامل نامه: {letterData.LetterCarrier}\n");


        // Save the Word document to a specific folder in your project
        string folderPath = Path.Combine(_webHostEnvironment.WebRootPath, "FileName");
        string filePath = Path.Combine(folderPath, "SampleLetter.docx");

        // Ensure the folder exists, create it if not
        Directory.CreateDirectory(folderPath);

        // Save the document to the specified path
        using (FileStream fileStream = new FileStream(filePath, FileMode.Create))
        {
            document.Save(fileStream, FormatType.Docx);
        }

        //// Return a JSON response, you can customize it as needed
        //return new ContentResult
        //{
        //    Content = "{\"success\": true, \"message\": \"Document saved successfully\"}",
        //    ContentType = "application/json"
        //};




        // Save the Word document to MemoryStream
        MemoryStream stream = new MemoryStream();
        document.Save(stream, FormatType.Docx);
        stream.Position = 0;

        // Download Word document in the browser
        return File(stream, "application/msword", "SampleLetter.docx");

    }













    //[HttpPost]
    //public ActionResult DownloadWordLetter(string Id)
    //{
    //    string letterId = Id ;

    //    //Open an existing Word document.
    //    WordDocument document = new WordDocument(new FileStream("Input.docx", FileMode.Open, FileAccess.Read), FormatType.Automatic);

    //    //Access the section in a Word document
    //    IWSection section = document.Sections[0];
    //    //Add new paragraph to the section
    //    IWParagraph paragraph = section.AddParagraph();
    //    paragraph.ParagraphFormat.FirstLineIndent = 36;
    //    paragraph.BreakCharacterFormat.FontSize = 12f;
    //    //Add new text to the paragraph
    //    IWTextRange textRange = paragraph.AppendText("In 2000, AdventureWorks Cycles bought a small manufacturing plant, Importadores Neptuno, located in Mexico. Importadores Neptuno manufactures several critical subcomponents for the AdventureWorks Cycles product line. These subcomponents are shipped to the Bothell location for final product assembly. In 2001, Importadores Neptuno, became the sole manufacturer and distributor of the touring bicycle product group.") as IWTextRange;
    //    textRange.CharacterFormat.FontSize = 12f;

    //    //Save the Word document to MemoryStream.
    //    MemoryStream stream = new MemoryStream();
    //    document.Save(stream, FormatType.Docx);
    //    stream.Position = 0;

    //    //Download Word document in the browser.
    //    return File(stream, "application/msword", "Sample.docx");

    //    //var res = new LetterRepository(Context).DownloadWordLetter(letterId,HttpContext);
    //    //return res;
    //}
}