import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { TemplateRow } from "./TemplateRow";

export interface TemplateColumns {
    Id: Column<TemplateRow>;
    Title: Column<TemplateRow>;
    TemplateFile: Column<TemplateRow>;
    IsDefault: Column<TemplateRow>;
    CreatedDate: Column<TemplateRow>;
    CreatorUserName: Column<TemplateRow>;
    ModifiedDate: Column<TemplateRow>;
    ModifiedUserName: Column<TemplateRow>;
}

export class TemplateColumns extends ColumnsBase<TemplateRow> {
    static readonly columnsKey = 'TemplateDB.Template';
    static readonly Fields = fieldsProxy<TemplateColumns>();
}