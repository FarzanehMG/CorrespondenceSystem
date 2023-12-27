
import { RelatedLettersColumns, RelatedLettersRow } from "@/ServerTypes/RelatedLettersDB";
import { Decorators, alertDialog, toId } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { RelatedLettersDialog } from "./RelatedLettersDialog";

@Decorators.registerEditor('Serenity_Student.TaskDescriptionDB.TaskDescriptionEditor')
export class TaskDescriptionEditor<P = {}> extends GridEditorBase<RelatedLettersRow, P> {
    protected getColumnsKey() { return RelatedLettersColumns.columnsKey; }
    protected getDialogType() { return RelatedLettersDialog; }
    protected getLocalTextPrefix() { return RelatedLettersRow.localTextPrefix; }

    validateEntity(row, id) {
        row.LetterId = toId(row.LetterId);

        var sameLetter = this.view.getItems().find(x => x.LetterId === row.LetterId);
        if (sameLetter && this.id(sameLetter) !== id) {
            alertDialog('This product is already in order details!');
            return false;
        }

        id ??= row[this.getIdProperty()];



        return true;
    }
}