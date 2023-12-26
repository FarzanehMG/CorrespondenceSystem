import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { RecriverSenderRow } from "./RecriverSenderRow";

export interface RecriverSenderColumns {
    Id: Column<RecriverSenderRow>;
    Name: Column<RecriverSenderRow>;
    IsDefault: Column<RecriverSenderRow>;
    CreatedDate: Column<RecriverSenderRow>;
    CreatorUserName: Column<RecriverSenderRow>;
    ModifiedDate: Column<RecriverSenderRow>;
    ModifiedUserName: Column<RecriverSenderRow>;
    TimeStamp: Column<RecriverSenderRow>;
}

export class RecriverSenderColumns extends ColumnsBase<RecriverSenderRow> {
    static readonly columnsKey = 'RecriverSenderDB.RecriverSender';
    static readonly Fields = fieldsProxy<RecriverSenderColumns>();
}