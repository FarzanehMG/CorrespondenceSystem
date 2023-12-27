import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { SignLettersRow } from "./SignLettersRow";

export interface SignLettersColumns {
    SignTitle: Column<SignLettersRow>;
    CreatedDate: Column<SignLettersRow>;
}

export class SignLettersColumns extends ColumnsBase<SignLettersRow> {
    static readonly columnsKey = 'SignLettersDB.SignLetters';
    static readonly Fields = fieldsProxy<SignLettersColumns>();
}