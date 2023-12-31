import { LetterForm, LetterRow, LetterService } from '@/ServerTypes/LetterDB';
import { Decorators, EntityDialog, resolveUrl, serviceCall, EditorUtils, notifyError, tryFirst, indexOf } from '@serenity-is/corelib';
import { LetterAttachmentRow } from '../../ServerTypes/LetterAttachmentDB';
import { LetterTypes, States } from '../../ServerTypes/Modules';
import { GridEditorDialog } from '@serenity-is/extensions'
@Decorators.registerClass('CorrespondenceSystem.LetterDB.LetterDialog')
export class LetterDialog extends EntityDialog<LetterRow, any> {
    protected getFormKey() { return LetterForm.formKey; }
    protected getRowDefinition() { return LetterRow; }
    protected getService() { return LetterService.baseUrl; }

    protected form = new LetterForm(this.idPrefix);



}