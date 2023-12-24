import { fieldsProxy } from '@serenity-is/corelib';

export interface RecriverSenderRow {
    Id?: string;
    Name?: string;
    IsDefault?: boolean;
    CreatedDate?: string;
    CreatorUserName?: string;
    ModifiedDate?: string;
    ModifiedUserName?: string;
    TimeStamp?: number[];
}

export abstract class RecriverSenderRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'Name';
    static readonly localTextPrefix = 'RecriverSenderDB.RecriverSender';

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<RecriverSenderRow>();
}