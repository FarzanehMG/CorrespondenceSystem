import { RelatedLettersColumns, RelatedLettersRow } from "@/ServerTypes/RelatedLettersDB";
import { Decorators } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { RelatedLettersDialog } from "./RelatedLettersDialog";

@Decorators.registerEditor('CorrespondenceSystem.RelatedLettersDB.RelatedLettersEditor')
export class RelatedLettersEditor<P = {}> extends GridEditorBase<RelatedLettersRow, P> {
    protected getColumnsKey() { return RelatedLettersColumns.columnsKey; }
    protected getDialogType() { return RelatedLettersDialog; }
    protected getLocalTextPrefix() { return RelatedLettersRow.localTextPrefix; }

}