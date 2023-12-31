import { fieldsProxy } from "@serenity-is/corelib";

export interface LetterHistoryRow {
    Id?: string;
    LetterId?: string;
    ActionType?: number;
    TemplateId?: string;
    ReceiverId?: string;
    SenderId?: string;
    GrandSubjectId?: string;
    LetterIdentifier?: string;
    LetterIdentifierGen?: string;
    LetterNo?: string;
    Title?: string;
    LetterContent?: string;
    Tag?: string;
    LetterType?: number;
    State?: number;
    PriorityState?: number;
    HasAttachment?: boolean;
    CreatedDate?: string;
    CreatorUserName?: string;
    ModifiedDate?: string;
    ModifiedUserName?: string;
    LetterCarrier?: string;
    IsActive?: number;
    LetterLetterIdentifier?: string;
}

export abstract class LetterHistoryRow {
    static readonly idProperty = 'Id';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'LetterIdentifier';
    static readonly localTextPrefix = 'LetterHistoryDB.LetterHistory';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<LetterHistoryRow>();
}