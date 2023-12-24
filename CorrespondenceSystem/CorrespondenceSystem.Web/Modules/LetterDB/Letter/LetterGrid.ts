import { LetterColumns, LetterRow, LetterService } from '@/ServerTypes/LetterDB';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { LetterDialog } from './LetterDialog';

@Decorators.registerClass('CorrespondenceSystem.LetterDB.LetterGrid')
export class LetterGrid extends EntityGrid<LetterRow, any> {
    protected getColumnsKey() { return LetterColumns.columnsKey; }
    protected getDialogType() { return LetterDialog; }
    protected getRowDefinition() { return LetterRow; }
    protected getService() { return LetterService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}