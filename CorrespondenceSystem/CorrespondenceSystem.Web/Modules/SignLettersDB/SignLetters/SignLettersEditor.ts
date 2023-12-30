import { Decorators, alertDialog, toId, tryFirst, serviceCall, resolveUrl, EditorUtils } from "@serenity-is/corelib";
import { GridEditorBase, } from "@serenity-is/extensions";
import { LetterDialog } from "../../LetterDB/Letter/LetterDialog";
import { SignLettersColumns, SignLettersRow } from "../../ServerTypes/SignLettersDB";
import { SignLettersDialog } from "./SignLettersDialog";

@Decorators.registerEditor('CorrespondenceSystem.SignLettersDB.SignLettersEditor')
export class SignLettersEditor<P = {}> extends GridEditorBase<SignLettersRow, P> {
    protected getColumnsKey() { return SignLettersColumns.columnsKey; }
    protected getDialogType() { return SignLettersDialog; }
    protected getLocalTextPrefix() { return SignLettersRow.localTextPrefix; }


    AddSign() {
        serviceCall(
            {
                url: resolveUrl("~/Services/SignLettersDB/SignLetters/AddSignLetter"),
                onSuccess: (response: any) => {
                    var items = this.view.getItems()

                    items.push(
                        {
                            LetterId: "",
                            SignTitle: response['SignTitle']
                        }
                    )

                    this.setEntities(items )

                },
                method : 'post'
            }
        );
    }

    getButtons(){
        var s = super.getButtons();
        var btn = tryFirst(s, x => x.cssClass == 'add-button');
        btn.onClick = null;
        btn.onClick = e => this.AddSign()
        return s;
    }



    //getButtons(){
    //    var s = super.getButtons();
    //    tryFirst(s, x => x.cssClass == 'add-button').onClick(() => this.AddSign());
    //    return s;
    //}





}