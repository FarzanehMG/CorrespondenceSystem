import { fieldsProxy } from "@serenity-is/corelib";

export interface CounterpartRow {
    Id?: string;
    LetterId?: string;
    ReciverId?: string;
    CopyType?: number;
    CreatedDate?: string;
    CreatorUserName?: string;
    ModifiedDate?: string;
    ModifiedUserName?: string;
    IsActive?: number;
    UserId?: number;
    LetterIdentifier?: string;
    ReciverName?: string;
}

export abstract class CounterpartRow {
    static readonly idProperty = 'Id';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'CreatorUserName';
    static readonly localTextPrefix = 'CounterpartDB.Counterpart';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<CounterpartRow>();
}