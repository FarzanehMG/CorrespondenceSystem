import { ColumnsBase, fieldsProxy } from '@serenity-is/corelib';
import { Column } from '@serenity-is/sleekgrid';
import { CounterpartRow } from './CounterpartRow';

export interface CounterpartColumns {
    Id: Column<CounterpartRow>;
    LetterId: Column<CounterpartRow>;
    ReciverId: Column<CounterpartRow>;
    CopyType: Column<CounterpartRow>;
    CreatedDate: Column<CounterpartRow>;
    CreatorUserName: Column<CounterpartRow>;
    ModifiedDate: Column<CounterpartRow>;
    ModifiedUserName: Column<CounterpartRow>;
}

export class CounterpartColumns extends ColumnsBase<CounterpartRow> {
    static readonly columnsKey = 'CounterpartDB.Counterpart';
    static readonly Fields = fieldsProxy<CounterpartColumns>();
}