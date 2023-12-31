
import { LetterColumns, LetterRow } from "@/ServerTypes/LetterDB";
import { Decorators, alertDialog, toId } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { LetterDialog } from "./LetterDialog";

@Decorators.registerEditor('CorrespondenceSystem.LetterDB.LetterEditor')
export class TaskDescriptionEditor<P = {}> extends GridEditorBase<LetterRow> {
    protected getColumnsKey() { return LetterColumns.columnsKey; }
    protected getDialogType() { return LetterDialog; }
    protected getLocalTextPrefix() { return LetterRow.localTextPrefix; }

    validateEntity(row, id) {
        row.Id = toId(row.Id);

        var sameLetter = this.view.getItems().find(x => x.Id === row.Id);
        if (sameLetter && this.id(sameLetter) !== id) {
            alertDialog('This product is already in order details!');
            return false;
        }

        id ??= row[this.getIdProperty()];



        return true;
    }
}