import { SignColumns, SignRow, SignService } from '@/ServerTypes/SignDB';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { SignDialog } from './SignDialog';

@Decorators.registerClass('CorrespondenceSystem.SignDB.SignGrid')
export class SignGrid extends EntityGrid<SignRow, any> {
    protected getColumnsKey() { return SignColumns.columnsKey; }
    protected getDialogType() { return SignDialog; }
    protected getRowDefinition() { return SignRow; }
    protected getService() { return SignService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}