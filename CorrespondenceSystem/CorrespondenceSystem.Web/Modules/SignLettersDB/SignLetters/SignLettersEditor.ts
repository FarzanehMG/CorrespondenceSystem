import { Decorators, alertDialog, toId } from "@serenity-is/corelib";
import { GridEditorBase } from "@serenity-is/extensions";
import { SignLettersColumns, SignLettersRow } from "../../ServerTypes/SignLettersDB";
import { SignLettersDialog } from "./SignLettersDialog";

@Decorators.registerEditor('CorrespondenceSystem.SignLettersDB.SignLettersEditor')
export class SignLettersEditor<P = {}> extends GridEditorBase<SignLettersRow, P> {
    protected getColumnsKey() { return SignLettersColumns.columnsKey; }
    protected getDialogType() { return SignLettersDialog; }
    protected getLocalTextPrefix() { return SignLettersRow.localTextPrefix; }

}