import { CounterpartForm, CounterpartRow, CounterpartService } from '@/ServerTypes/CounterpartDB';
import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { GridEditorDialog } from '@serenity-is/extensions';

@Decorators.registerClass('CorrespondenceSystem.CounterpartDB.CounterpartDialog')
export class CounterpartDialog extends GridEditorDialog<CounterpartRow> {
    protected getFormKey() { return CounterpartForm.formKey; }
    protected getRowDefinition() { return CounterpartRow; }
    protected getService() { return CounterpartService.baseUrl; }

    protected form = new CounterpartForm(this.idPrefix);
}