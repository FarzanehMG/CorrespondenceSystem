import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { CounterpartRow } from "./CounterpartRow";

export interface CounterpartColumns {
    LetterIdentifier: Column<CounterpartRow>;
    CopyType: Column<CounterpartRow>;
    CreatedDate: Column<CounterpartRow>;
}

export class CounterpartColumns extends ColumnsBase<CounterpartRow> {
    static readonly columnsKey = 'CounterpartDB.Counterpart';
    static readonly Fields = fieldsProxy<CounterpartColumns>();
}