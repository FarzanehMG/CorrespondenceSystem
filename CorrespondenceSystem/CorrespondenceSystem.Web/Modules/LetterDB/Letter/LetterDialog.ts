import { LetterForm, LetterRow, LetterService } from '@/ServerTypes/LetterDB';
import { Decorators, EntityDialog, resolveUrl, serviceCall, EditorUtils, notifyError, tryFirst, indexOf, postToService } from '@serenity-is/corelib';
import { LetterAttachmentRow } from '../../ServerTypes/LetterAttachmentDB';
import { LetterTypes, States } from '../../ServerTypes/Modules';
import { GridEditorDialog } from '@serenity-is/extensions'
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


    protected reportKey: string;

    executeReport(targetFrame: string, exportType: string): void {
        if (!this.validateForm()) {
            return;
        }
        var parameters = new Object();
        this.propertyGrid.save(parameters);
        postToService({
            service: 'Report/Execute',
            request: {
                ReportKey: this.reportKey,
                DesignId: 'Default',
                ExportType: exportType,
                Parameters: parameters
            }, target: targetFrame
        });

    }


    protected getToolbarButtons() {
        var buttons = super.getToolbarButtons();

        buttons.splice(indexOf(buttons, x => x.cssClass == "undo-delete-button"), 1);
        buttons.splice(indexOf(buttons, x => x.cssClass == "localization-button"), 1);
        buttons.splice(indexOf(buttons, x => x.cssClass == "clone-button"), 1);
        buttons.splice(indexOf(buttons, x => x.cssClass == "apply-changes-button"), 1);

        //buttons.push({
        //    title: 'Word', cssClass: 'export-docx-button', onClick: () => {
        //        this.executeReport('', 'Docx');
        //    }
        //});

        return buttons;
    }


    afterLoadEntity() {
        this.SetRecriverSender()
        this.SetDefaultIdentifireGen();


        this.form.LetterType.changeSelect2(e => {
            if (this.form.LetterType.value === LetterTypes.Outgoing.toString()) {
                EditorUtils.setValue(this.form.State, States.Draft);            
            }
        });

        this.form.LetterType.changeSelect2(e => {
            this.SetDefaultTemplate();
        });
        
    }

    validateBeforeSave() {
        if (this.form.HasAttachment.value && this.form.DetailList.value.length == 0) {
            notifyError("Attach file!!!");
            return false;
        }
        return true;
    }



    SetRecriverSender() {
        serviceCall({
            url: resolveUrl("~/Services/LetterDB/Letter/SetDefaultRecriverSender"),
            onSuccess: (response: any) => {
                if (response) {
                    this.form.LetterType.changeSelect2(e => {
                        if (this.form.LetterType.value == LetterTypes.Incoming.toString()) {

                            EditorUtils.setValue(this.form.ReceiverId, response);
                            EditorUtils.setReadonly(this.form.ReceiverId.element,true);
                            EditorUtils.setValue(this.form.SenderId, null);
                            EditorUtils.setReadonly(this.form.SenderId.element, false);
                        }

                        if (this.form.LetterType.value == LetterTypes.Outgoing.toString()) {
                            var id = this.SetRecriverSender();

                            EditorUtils.setValue(this.form.SenderId, response);
                            EditorUtils.setReadonly(this.form.SenderId.element, true);
                            EditorUtils.setValue(this.form.ReceiverId, null);
                            EditorUtils.setReadonly(this.form.ReceiverId.element, false);
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

                if (this.form.LetterType.value === LetterTypes.Outgoing.toString()) {
                    EditorUtils.setValue(this.form.UseDefaultTemplate, true);
                    EditorUtils.setValue(this.form.TemplateId, response);
                    EditorUtils.setReadonly(this.form.TemplateId.element, true);
                } else {
                    EditorUtils.setValue(this.form.UseDefaultTemplate, false);
                    EditorUtils.setValue(this.form.TemplateId, null);
                    EditorUtils.setReadonly(this.form.TemplateId.element, false);
                }

                 
                
            },
            method: 'post'
        });
    }
    SetDefaultIdentifireGen() {
        serviceCall({
            url: resolveUrl("~/Services/LetterDB/Letter/SetDefaultIdentifireGen"),
            onSuccess: (response: any) => {
                if (response) {
                    this.form.LetterType.changeSelect2(e => {
                        if (this.form.LetterType.value == LetterTypes.Outgoing.toString()) {

                            EditorUtils.setValue(this.form.LetterIdentifierGen, response.Identifier);
                            EditorUtils.setReadonly(this.form.LetterIdentifierGen.element, true);
                        }

                        if (this.form.LetterType.value == LetterTypes.Incoming.toString()) {
                            var id = this.SetRecriverSender();

                            EditorUtils.setValue(this.form.LetterIdentifierGen, null);
                            EditorUtils.setReadonly(this.form.LetterIdentifierGen.element, false);


                        }
                    });

                } else {
                    console.error('Invalid response format for SetDefaultRecriverSender');
                }
            },
            method: 'post'
        });
    }






    
}