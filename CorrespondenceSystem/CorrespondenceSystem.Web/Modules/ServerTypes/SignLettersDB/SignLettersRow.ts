import { fieldsProxy } from "@serenity-is/corelib";

export interface SignLettersRow {
    Id?: string;
    LetterId?: string;
    SignId?: string;
    SignType?: number;
    SignDate?: string;
    CreatedDate?: string;
    CreatorUserName?: string;
    ModifiedUserName?: string;
    IsActive?: number;
    LetterIdentifier?: string;
    SignTitle?: string;
    SignLetterId?: number;
}

export abstract class SignLettersRow {
    static readonly idProperty = 'Id';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'CreatorUserName';
    static readonly localTextPrefix = 'SignLettersDB.SignLetters';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<SignLettersRow>();
}