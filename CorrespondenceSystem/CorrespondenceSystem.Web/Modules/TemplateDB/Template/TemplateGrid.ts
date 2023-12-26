import { TemplateColumns, TemplateRow, TemplateService } from '@/ServerTypes/TemplateDB';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { TemplateDialog } from './TemplateDialog';

@Decorators.registerClass('CorrespondenceSystem.TemplateDB.TemplateGrid')
export class TemplateGrid extends EntityGrid<TemplateRow, any> {
    protected getColumnsKey() { return TemplateColumns.columnsKey; }
    protected getDialogType() { return TemplateDialog; }
    protected getRowDefinition() { return TemplateRow; }
    protected getService() { return TemplateService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}