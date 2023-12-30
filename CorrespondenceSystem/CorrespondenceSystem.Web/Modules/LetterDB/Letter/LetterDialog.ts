import { LetterForm, LetterRow, LetterService } from '@/ServerTypes/LetterDB';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('CorrespondenceSystem.LetterDB.LetterDialog')
export class LetterDialog extends EntityDialog<LetterRow, any> {
    protected getFormKey() { return LetterForm.formKey; }
    protected getRowDefinition() { return LetterRow; }
    protected getService() { return LetterService.baseUrl; }

    protected form = new LetterForm(this.idPrefix);



}