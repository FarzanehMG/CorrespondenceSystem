import { fieldsProxy } from '@serenity-is/corelib';

export interface RelatedLettersRow {
    Id?: string;
    LetterId?: string;
    RelatedLetterId?: string;
    RelationType?: number;
    CreatedDate?: string;
    CreatorUserName?: string;
    ModifiedDate?: string;
    ModifiedUserName?: string;
    LetterIdentifier?: string;
}

export abstract class RelatedLettersRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'CreatorUserName';
    static readonly localTextPrefix = 'RelatedLettersDB.RelatedLetters';

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<RelatedLettersRow>();
}