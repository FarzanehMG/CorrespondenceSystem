import { RelatedLettersColumns, RelatedLettersRow, RelatedLettersService } from '@/ServerTypes/RelatedLettersDB';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { RelatedLettersDialog } from './RelatedLettersDialog';

@Decorators.registerClass('CorrespondenceSystem.RelatedLettersDB.RelatedLettersGrid')
export class RelatedLettersGrid extends EntityGrid<RelatedLettersRow, any> {
    protected getColumnsKey() { return RelatedLettersColumns.columnsKey; }
    protected getDialogType() { return RelatedLettersDialog; }
    protected getRowDefinition() { return RelatedLettersRow; }
    protected getService() { return RelatedLettersService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}