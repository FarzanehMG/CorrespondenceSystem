import { LetterAttachmentForm, LetterAttachmentRow, LetterAttachmentService } from '@/ServerTypes/LetterAttachmentDB';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('CorrespondenceSystem.LetterAttachmentDB.LetterAttachmentDialog')
export class LetterAttachmentDialog extends EntityDialog<LetterAttachmentRow, any> {
    protected getFormKey() { return LetterAttachmentForm.formKey; }
    protected getRowDefinition() { return LetterAttachmentRow; }
    protected getService() { return LetterAttachmentService.baseUrl; }

    protected form = new LetterAttachmentForm(this.idPrefix);
}