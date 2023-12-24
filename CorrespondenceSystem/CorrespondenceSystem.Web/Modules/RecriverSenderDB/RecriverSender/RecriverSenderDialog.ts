import { RecriverSenderForm, RecriverSenderRow, RecriverSenderService } from '@/ServerTypes/RecriverSenderDB';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('CorrespondenceSystem.RecriverSenderDB.RecriverSenderDialog')
export class RecriverSenderDialog extends EntityDialog<RecriverSenderRow, any> {
    protected getFormKey() { return RecriverSenderForm.formKey; }
    protected getRowDefinition() { return RecriverSenderRow; }
    protected getService() { return RecriverSenderService.baseUrl; }

    protected form = new RecriverSenderForm(this.idPrefix);
}