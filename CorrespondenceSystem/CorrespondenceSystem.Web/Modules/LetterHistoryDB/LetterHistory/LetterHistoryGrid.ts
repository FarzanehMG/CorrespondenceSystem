import { LetterHistoryColumns, LetterHistoryRow, LetterHistoryService } from '@/ServerTypes/LetterHistoryDB';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { LetterHistoryDialog } from './LetterHistoryDialog';

@Decorators.registerClass('CorrespondenceSystem.LetterHistoryDB.LetterHistoryGrid')
export class LetterHistoryGrid extends EntityGrid<LetterHistoryRow, any> {
    protected getColumnsKey() { return LetterHistoryColumns.columnsKey; }
    protected getDialogType() { return LetterHistoryDialog; }
    protected getRowDefinition() { return LetterHistoryRow; }
    protected getService() { return LetterHistoryService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}