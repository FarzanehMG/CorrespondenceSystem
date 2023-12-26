import { ColumnsBase, fieldsProxy } from '@serenity-is/corelib';
import { Column } from '@serenity-is/sleekgrid';
import { RelatedLettersRow } from './RelatedLettersRow';

export interface RelatedLettersColumns {
    Id: Column<RelatedLettersRow>;
    LetterId: Column<RelatedLettersRow>;
    RelatedLetterId: Column<RelatedLettersRow>;
    RelationType: Column<RelatedLettersRow>;
    CreatedDate: Column<RelatedLettersRow>;
    CreatorUserName: Column<RelatedLettersRow>;
    ModifiedDate: Column<RelatedLettersRow>;
    ModifiedUserName: Column<RelatedLettersRow>;
}

export class RelatedLettersColumns extends ColumnsBase<RelatedLettersRow> {
    static readonly columnsKey = 'RelatedLettersDB.RelatedLetters';
    static readonly Fields = fieldsProxy<RelatedLettersColumns>();
}