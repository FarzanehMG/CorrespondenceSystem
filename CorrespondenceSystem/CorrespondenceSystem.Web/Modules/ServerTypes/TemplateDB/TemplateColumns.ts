import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { TemplateRow } from "./TemplateRow";

export interface TemplateColumns {
    Title: Column<TemplateRow>;
    TemplateFile: Column<TemplateRow>;
}

export class TemplateColumns extends ColumnsBase<TemplateRow> {
    static readonly columnsKey = 'TemplateDB.Template';
    static readonly Fields = fieldsProxy<TemplateColumns>();
}