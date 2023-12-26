import { LetterHistoryForm, LetterHistoryRow, LetterHistoryService } from '@/ServerTypes/LetterHistoryDB';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('CorrespondenceSystem.LetterHistoryDB.LetterHistoryDialog')
export class LetterHistoryDialog extends EntityDialog<LetterHistoryRow, any> {
    protected getFormKey() { return LetterHistoryForm.formKey; }
    protected getRowDefinition() { return LetterHistoryRow; }
    protected getService() { return LetterHistoryService.baseUrl; }

    protected form = new LetterHistoryForm(this.idPrefix);
}