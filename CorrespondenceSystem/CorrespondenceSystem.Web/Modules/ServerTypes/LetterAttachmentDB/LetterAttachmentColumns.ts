import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { LetterAttachmentRow } from "./LetterAttachmentRow";

export interface LetterAttachmentColumns {
    Id: Column<LetterAttachmentRow>;
    LetterIdentifier: Column<LetterAttachmentRow>;
    Title: Column<LetterAttachmentRow>;
    AttachmentFile: Column<LetterAttachmentRow>;
    CreatedDate: Column<LetterAttachmentRow>;
    CreatorUserName: Column<LetterAttachmentRow>;
    ModifiedDate: Column<LetterAttachmentRow>;
    ModifiedUserName: Column<LetterAttachmentRow>;
    TimeStamp: Column<LetterAttachmentRow>;
}

export class LetterAttachmentColumns extends ColumnsBase<LetterAttachmentRow> {
    static readonly columnsKey = 'LetterAttachmentDB.LetterAttachment';
    static readonly Fields = fieldsProxy<LetterAttachmentColumns>();
}