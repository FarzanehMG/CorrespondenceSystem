import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { States } from "../Modules/Enums.Letter.States";
import { LetterRow } from "./LetterRow";

export interface LetterColumns {
    Title: Column<LetterRow>;
    Tag: Column<LetterRow>;
    GrandSubjectTitle: Column<LetterRow>;
    LetterNo: Column<LetterRow>;
    CreatedDate: Column<LetterRow>;
    State: Column<LetterRow>;
    LetterType: Column<LetterRow>;
}

export class LetterColumns extends ColumnsBase<LetterRow> {
    static readonly columnsKey = 'LetterDB.Letter';
    static readonly Fields = fieldsProxy<LetterColumns>();
}

[States]; // referenced types