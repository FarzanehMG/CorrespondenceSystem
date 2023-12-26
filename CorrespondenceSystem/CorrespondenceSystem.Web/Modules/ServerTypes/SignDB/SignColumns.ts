import { ColumnsBase, fieldsProxy } from '@serenity-is/corelib';
import { Column } from '@serenity-is/sleekgrid';
import { SignRow } from './SignRow';

export interface SignColumns {
    Id: Column<SignRow>;
    Title: Column<SignRow>;
    SignAttachment: Column<SignRow>;
    CreatedDate: Column<SignRow>;
    CreatorUserName: Column<SignRow>;
    ModifiedDate: Column<SignRow>;
    ModifiedUserName: Column<SignRow>;
    UserId: Column<SignRow>;
    IsLast: Column<SignRow>;
}

export class SignColumns extends ColumnsBase<SignRow> {
    static readonly columnsKey = 'SignDB.Sign';
    static readonly Fields = fieldsProxy<SignColumns>();
}