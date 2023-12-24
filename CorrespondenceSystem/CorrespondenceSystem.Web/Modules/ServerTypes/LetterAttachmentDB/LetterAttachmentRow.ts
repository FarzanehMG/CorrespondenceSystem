import { fieldsProxy } from "@serenity-is/corelib";

export interface LetterAttachmentRow {
    Id?: string;
    LetterId?: string;
    Title?: string;
    AttachmentFile?: string;
    CreatedDate?: string;
    CreatorUserName?: string;
    ModifiedDate?: string;
    ModifiedUserName?: string;
    TimeStamp?: number[];
    LetterIdentifier?: string;
}

export abstract class LetterAttachmentRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'Title';
    static readonly localTextPrefix = 'LetterAttachmentDB.LetterAttachment';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<LetterAttachmentRow>();
}