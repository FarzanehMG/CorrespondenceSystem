import { fieldsProxy } from "@serenity-is/corelib";

export interface SignRow {
    Id?: string;
    Title?: string;
    SignAttachment?: string;
    CreatedDate?: string;
    CreatorUserName?: string;
    ModifiedDate?: string;
    ModifiedUserName?: string;
    UserId?: number;
    IsLast?: boolean;
}

export abstract class SignRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'Title';
    static readonly localTextPrefix = 'SignDB.Sign';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<SignRow>();
}