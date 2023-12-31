﻿import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib";

export interface TemplateRow {
    Id?: string;
    Title?: string;
    TemplateFile?: string;
    IsDefault?: boolean;
    CreatedDate?: string;
    CreatorUserName?: string;
    ModifiedDate?: string;
    ModifiedUserName?: string;
    IsActive?: number;
}

export abstract class TemplateRow {
    static readonly idProperty = 'Id';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'Title';
    static readonly localTextPrefix = 'TemplateDB.Template';
    static readonly lookupKey = 'TemplateDB.Template';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<TemplateRow>('TemplateDB.Template') }
    static async getLookupAsync() { return getLookupAsync<TemplateRow>('TemplateDB.Template') }

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<TemplateRow>();
}