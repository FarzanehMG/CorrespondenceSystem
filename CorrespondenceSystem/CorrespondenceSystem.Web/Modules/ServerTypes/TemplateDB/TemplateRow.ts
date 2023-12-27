import { fieldsProxy } from "@serenity-is/corelib";

export interface TemplateRow {
    Id?: string;
    Title?: string;
    TemplateFile?: string;
    IsDefault?: boolean;
    CreatedDate?: string;
    CreatorUserName?: string;
    ModifiedDate?: string;
    ModifiedUserName?: string;
}

export abstract class TemplateRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'Title';
    static readonly localTextPrefix = 'TemplateDB.Template';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<TemplateRow>();
}