
import { CounterpartColumns, CounterpartRow } from "@/ServerTypes/CounterpartDB";
import { Decorators, alertDialog, toId } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { CounterpartDialog } from "./CounterpartDialog";

@Decorators.registerEditor('CorrespondenceSystem.CounterpartDB.CounterpartEditor')
export class TaskDescriptionEditor<P = {}> extends GridEditorBase<CounterpartRow, P> {
    protected getColumnsKey() { return CounterpartColumns.columnsKey; }
    protected getDialogType() { return CounterpartDialog; }
    protected getLocalTextPrefix() { return CounterpartRow.localTextPrefix; }

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