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

                    const newItem: SignLettersRow  = {
                        SignTitle: response['Title'],
                        SignId: response['Id'],
                        CreatedDate: response['CreatedDate']
                    };

                    var id = this.id(newItem)
                    if (id == null) {
                        (newItem as any)[this.getIdProperty()] = this.getNextId()
                    }

                    items.push(newItem);
                    this.setEntities(items);

                },
                method : 'post'
            }
        );
    }



    getButtons() {
        var buttons = super.getButtons();
        var addButton = tryFirst(buttons, x => x.cssClass == 'add-button');

        // Check if the button is found
        if (addButton) {
            // Disable the button after the first click
            let isButtonClickable = true;

            addButton.onClick = (e) => {
                if (isButtonClickable) {
                    // Call your AddSign method
                    this.AddSign();

                    // Disable the button
                    isButtonClickable = false;

                    // Optionally, you can update the button appearance or do other actions
                    addButton.disabled = true;
                }
            };
        }

        return buttons;
    }


    //getButtons(){
    //    var s = super.getButtons();
    //    var btn = tryFirst(s, x => x.cssClass == 'add-button');
    //    btn.onClick = null;
    //    btn.onClick = e => this.AddSign()
    //    return s;
    //}







}