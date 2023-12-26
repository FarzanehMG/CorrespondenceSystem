import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { LetterAttachmentRow } from "./LetterAttachmentRow";

export interface LetterAttachmentColumns {
    Title: Column<LetterAttachmentRow>;
    AttachmentFile: Column<LetterAttachmentRow>;
}

export class LetterAttachmentColumns extends ColumnsBase<LetterAttachmentRow> {
    static readonly columnsKey = 'LetterAttachmentDB.LetterAttachment';
    static readonly Fields = fieldsProxy<LetterAttachmentColumns>();
}