import { CounterpartColumns, CounterpartRow, CounterpartService } from '@/ServerTypes/CounterpartDB';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { CounterpartDialog } from './CounterpartDialog';

@Decorators.registerClass('CorrespondenceSystem.CounterpartDB.CounterpartGrid')
export class CounterpartGrid extends EntityGrid<CounterpartRow, any> {
    protected getColumnsKey() { return CounterpartColumns.columnsKey; }
    protected getDialogType() { return CounterpartDialog; }
    protected getRowDefinition() { return CounterpartRow; }
    protected getService() { return CounterpartService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}