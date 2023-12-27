import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { SignLettersRow } from "./SignLettersRow";

export interface SignLettersColumns {
    Id: Column<SignLettersRow>;
    LetterIdentifier: Column<SignLettersRow>;
    SignTitle: Column<SignLettersRow>;
    SignType: Column<SignLettersRow>;
    SignDate: Column<SignLettersRow>;
    CreatedDate: Column<SignLettersRow>;
    CreatorUserName: Column<SignLettersRow>;
    ModifiedUserName: Column<SignLettersRow>;
}

export class SignLettersColumns extends ColumnsBase<SignLettersRow> {
    static readonly columnsKey = 'SignLettersDB.SignLetters';
    static readonly Fields = fieldsProxy<SignLettersColumns>();
}