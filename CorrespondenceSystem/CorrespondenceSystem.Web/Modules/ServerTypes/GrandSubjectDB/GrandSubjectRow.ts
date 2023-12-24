import { fieldsProxy } from '@serenity-is/corelib';

export interface GrandSubjectRow {
    Id?: string;
    Title?: string;
    Description?: string;
    CreatedDate?: string;
    CreatorUserName?: string;
    ModifiedDate?: string;
    ModifiedUserName?: string;
    TimeStamp?: number[];
}

export abstract class GrandSubjectRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'Title';
    static readonly localTextPrefix = 'GrandSubjectDB.GrandSubject';

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<GrandSubjectRow>();
}