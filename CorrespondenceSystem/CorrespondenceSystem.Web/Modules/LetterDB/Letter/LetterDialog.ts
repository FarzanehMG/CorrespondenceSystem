import { LetterForm, LetterRow, LetterService } from '@/ServerTypes/LetterDB';
import { Decorators, EntityDialog, resolveUrl, serviceCall, EditorUtils } from '@serenity-is/corelib';
import { LetterTypes, States } from '../../ServerTypes/Modules';

@Decorators.registerClass('CorrespondenceSystem.LetterDB.LetterDialog')
export class LetterDialog extends EntityDialog<LetterRow, any> {
    protected getFormKey() { return LetterForm.formKey; }
    protected getRowDefinition() { return LetterRow; }
    protected getService() { return LetterService.baseUrl; }

    protected form = new LetterForm(this.idPrefix);

    //constructor(container: JQuery) {
    //    super(container);
    //    this.SetDefaultSender()
    //}


    afterLoadEntity() {
        this.SetRecriverSender()

        this.SetDefaultTemplate()

        this.form.LetterType.changeSelect2(e => {
            if (this.form.LetterType.value === LetterTypes.Outgoing.toString()) {
                EditorUtils.setValue(this.form.State, States.Draft);
            }
        });


        //this.form.UseDefaultTemplate.changeSelect2(e => {
        //    if (this.form.UseDefaultTemplate.value) {
        //        EditorUtils.setReadonly(this.form.TemplateId.element, true);
        //        this.SetDefaultTemplate();
        //    } else {
        //        EditorUtils.setReadonly(this.form.TemplateId.element, false);
        //    }
        //});
    }

    SetRecriverSender() {
        serviceCall({
            url: resolveUrl("~/Services/LetterDB/Letter/SetDefaultRecriverSender"),
            onSuccess: (response: any) => {
                if (response) {
                    this.form.LetterType.changeSelect2(e => {
                        if (this.form.LetterType.value == LetterTypes.Incoming.toString()) {

                            EditorUtils.setValue(this.form.ReceiverId, response);
                            EditorUtils.setValue(this.form.SenderId, null);
                        }

                        if (this.form.LetterType.value == LetterTypes.Outgoing.toString()) {
                            var id = this.SetRecriverSender();

                            EditorUtils.setValue(this.form.SenderId, response);
                            EditorUtils.setValue(this.form.ReceiverId, null);
                        }
                    });

                } else {
                    console.error('Invalid response format for SetDefaultRecriverSender');
                }
            },
            method: 'post'
        });
    }


    SetDefaultTemplate() {
        serviceCall({
            url: resolveUrl("~/Services/LetterDB/Letter/SetDefaultTemplate"),
            onSuccess: (response: any) => {
                if (this.form.LetterType.value == LetterTypes.Outgoing.toString()) {

                    EditorUtils.setValue(this.form.TemplateId, response);
                }
            },
            method: 'post'
        });
    }


    
}