import { LetterAttachmentColumns, LetterAttachmentRow, LetterAttachmentService } from '@/ServerTypes/LetterAttachmentDB';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { LetterAttachmentDialog } from './LetterAttachmentDialog';

@Decorators.registerClass('CorrespondenceSystem.LetterAttachmentDB.LetterAttachmentGrid')
export class LetterAttachmentGrid extends EntityGrid<LetterAttachmentRow, any> {
    protected getColumnsKey() { return LetterAttachmentColumns.columnsKey; }
    protected getDialogType() { return LetterAttachmentDialog; }
    protected getRowDefinition() { return LetterAttachmentRow; }
    protected getService() { return LetterAttachmentService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}