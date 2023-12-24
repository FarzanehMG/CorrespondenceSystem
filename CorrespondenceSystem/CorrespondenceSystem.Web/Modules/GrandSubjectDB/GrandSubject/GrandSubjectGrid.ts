import { GrandSubjectColumns, GrandSubjectRow, GrandSubjectService } from '@/ServerTypes/GrandSubjectDB';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { GrandSubjectDialog } from './GrandSubjectDialog';

@Decorators.registerClass('CorrespondenceSystem.GrandSubjectDB.GrandSubjectGrid')
export class GrandSubjectGrid extends EntityGrid<GrandSubjectRow, any> {
    protected getColumnsKey() { return GrandSubjectColumns.columnsKey; }
    protected getDialogType() { return GrandSubjectDialog; }
    protected getRowDefinition() { return GrandSubjectRow; }
    protected getService() { return GrandSubjectService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}