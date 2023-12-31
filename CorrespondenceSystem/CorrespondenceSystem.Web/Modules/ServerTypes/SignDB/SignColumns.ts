import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { SignRow } from "./SignRow";

export interface SignColumns {
    Title: Column<SignRow>;
    SignAttachment: Column<SignRow>;
    IsLast: Column<SignRow>;
}

export class SignColumns extends ColumnsBase<SignRow> {
    static readonly columnsKey = 'SignDB.Sign';
    static readonly Fields = fieldsProxy<SignColumns>();
}