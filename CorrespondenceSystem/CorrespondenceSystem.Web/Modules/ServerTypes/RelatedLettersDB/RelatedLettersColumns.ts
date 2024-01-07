import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { RelatedLettersRow } from "./RelatedLettersRow";

export interface RelatedLettersColumns {
    LetterIdentifier: Column<RelatedLettersRow>;
    RelatedLetterTitle: Column<RelatedLettersRow>;
    RelationType: Column<RelatedLettersRow>;
    CreatedDate: Column<RelatedLettersRow>;
}

export class RelatedLettersColumns extends ColumnsBase<RelatedLettersRow> {
    static readonly columnsKey = 'RelatedLettersDB.RelatedLetters';
    static readonly Fields = fieldsProxy<RelatedLettersColumns>();
}