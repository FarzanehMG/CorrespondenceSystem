import { LetterAttachmentColumns, LetterAttachmentRow } from "@/ServerTypes/LetterAttachmentDB";
import { Decorators, alertDialog, toId } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { LetterAttachmentDialog } from "./LetterAttachmentDialog";

@Decorators.registerEditor('CorrespondenceSystem.LetterAttachmentDB.LetterAttachmentEditor')
export class LetterAttachmentEditor<P = {}> extends GridEditorBase<LetterAttachmentRow, P> {
    protected getColumnsKey() { return LetterAttachmentColumns.columnsKey; }
    protected getDialogType() { return LetterAttachmentDialog; }
    protected getLocalTextPrefix() { return LetterAttachmentRow.localTextPrefix; }

//    validateEntity(row, id) {
//        row.ProductID = toId(row.ProductID);

//        var sameProduct = this.view.getItems().find(x => x.ProductID === row.ProductID);
//        if (sameProduct && this.id(sameProduct) !== id) {
//            alertDialog('This product is already in order details!');
//            return false;
//        }

//        id ??= row[this.getIdProperty()];

//        ProductRow.getLookupAsync().then(lookup => {
//            var item = this.view?.getItemById?.(id);
//            if (item) {
//                item.ProductName = lookup.itemById[row.ProductID].ProductName;
//                this.view.updateItem(id, item);
//            }
//        });

//        row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
//        return true;
//    }
}