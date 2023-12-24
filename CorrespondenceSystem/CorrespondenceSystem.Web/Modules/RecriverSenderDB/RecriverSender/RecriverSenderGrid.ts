import { RecriverSenderColumns, RecriverSenderRow, RecriverSenderService } from '@/ServerTypes/RecriverSenderDB';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { RecriverSenderDialog } from './RecriverSenderDialog';

@Decorators.registerClass('CorrespondenceSystem.RecriverSenderDB.RecriverSenderGrid')
export class RecriverSenderGrid extends EntityGrid<RecriverSenderRow, any> {
    protected getColumnsKey() { return RecriverSenderColumns.columnsKey; }
    protected getDialogType() { return RecriverSenderDialog; }
    protected getRowDefinition() { return RecriverSenderRow; }
    protected getService() { return RecriverSenderService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}