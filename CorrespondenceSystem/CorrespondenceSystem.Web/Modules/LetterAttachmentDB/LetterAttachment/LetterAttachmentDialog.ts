import { LetterAttachmentForm, LetterAttachmentRow, LetterAttachmentService } from '@/ServerTypes/LetterAttachmentDB';
import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { GridEditorDialog } from '@serenity-is/extensions';

@Decorators.registerClass('CorrespondenceSystem.LetterAttachmentDB.LetterAttachmentDialog')
export class LetterAttachmentDialog extends GridEditorDialog<LetterAttachmentRow> {
    protected getFormKey() { return LetterAttachmentForm.formKey; }
    protected getRowDefinition() { return LetterAttachmentRow; }
    protected getService() { return LetterAttachmentService.baseUrl; }

    protected form = new LetterAttachmentForm(this.idPrefix);
}