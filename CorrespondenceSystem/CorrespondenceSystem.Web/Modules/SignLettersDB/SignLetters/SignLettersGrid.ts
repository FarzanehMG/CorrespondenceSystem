import { SignLettersColumns, SignLettersRow, SignLettersService } from '@/ServerTypes/SignLettersDB';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { SignLettersDialog } from './SignLettersDialog';

@Decorators.registerClass('CorrespondenceSystem.SignLettersDB.SignLettersGrid')
export class SignLettersGrid extends EntityGrid<SignLettersRow, any> {
    protected getColumnsKey() { return SignLettersColumns.columnsKey; }
    protected getDialogType() { return SignLettersDialog; }
    protected getRowDefinition() { return SignLettersRow; }
    protected getService() { return SignLettersService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}