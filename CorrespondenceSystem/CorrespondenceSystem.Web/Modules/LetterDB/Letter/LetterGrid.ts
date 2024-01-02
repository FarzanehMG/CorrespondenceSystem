import { LetterColumns, LetterRow, LetterService } from '@/ServerTypes/LetterDB';
import { Decorators, EditorUtils, EntityGrid, resolveUrl, serviceCall, ToolButton } from '@serenity-is/corelib';
import { Column } from '@serenity-is/sleekgrid';
import { LetterDialog } from './LetterDialog';


@Decorators.registerClass('CorrespondenceSystem.LetterDB.LetterGrid')
export class LetterGrid extends EntityGrid<LetterRow, any> {
    protected getColumnsKey() { return LetterColumns.columnsKey; }
    protected getDialogType() { return LetterDialog; }
    protected getRowDefinition() { return LetterRow; }
    protected getService() { return LetterService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }




    getColumns() {
        var columns = super.getColumns();

        // Add the "Download letter" column
        let downloadLetterColumn: Column<LetterRow> = {
            name: "Download letter",
            width: 120,
            format: ctx => `<a class="fa fa-download download"></a>`,
            minWidth: 120,
            maxWidth: 120,
            cssClass: 'download'     
        };

        columns.push(downloadLetterColumn);

        //const downloadLetterIndex = columns.lastIndexOf(downloadLetterColumn);

        return columns;
    }

    protected onClick(e: JQueryEventObject, row: number, cell: number) {
        super.onClick(e, row, cell);

        let item = this.itemAt(row);


        if ($(e.target).closest("download")) {

            e.preventDefault()

            this.DownloadWord(item.Id)

        }

    }

    DownloadWord(Id) {
        serviceCall({
            url: resolveUrl("~/Services/LetterDB/Letter/DownloadWordLetter"),
            data: JSON.stringify({ Id: Id }),  // Serialize the data to JSON
            contentType: 'application/json',    // Set content type to JSON
            onSuccess: (response: any) => {
                return response;
            },
            method: 'post'
        });
    }


    // Update renderButtons to return a single button
    //private renderButtons(rowData): string {
    //    // Customize the button rendering based on your rowData or other logic
    //    return `<button style="border: none;" onclick="handleButtonClick()">Download</button>`;
    //}



    //handleButtonClick() {
    //    this.SetDefaultTemplate();
    //}


}