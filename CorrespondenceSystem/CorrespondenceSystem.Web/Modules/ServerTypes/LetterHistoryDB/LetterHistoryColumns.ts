import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { LetterHistoryRow } from "./LetterHistoryRow";

export interface LetterHistoryColumns {
    Id: Column<LetterHistoryRow>;
    LetterLetterIdentifier: Column<LetterHistoryRow>;
    ActionType: Column<LetterHistoryRow>;
    TemplateId: Column<LetterHistoryRow>;
    ReceiverId: Column<LetterHistoryRow>;
    SenderId: Column<LetterHistoryRow>;
    GrandSubjectId: Column<LetterHistoryRow>;
    LetterIdentifier: Column<LetterHistoryRow>;
    LetterIdentifierGen: Column<LetterHistoryRow>;
    LetterNo: Column<LetterHistoryRow>;
    Title: Column<LetterHistoryRow>;
    LetterContent: Column<LetterHistoryRow>;
    Tag: Column<LetterHistoryRow>;
    LetterType: Column<LetterHistoryRow>;
    State: Column<LetterHistoryRow>;
    PriorityState: Column<LetterHistoryRow>;
    HasAttachment: Column<LetterHistoryRow>;
    CreatedDate: Column<LetterHistoryRow>;
    CreatorUserName: Column<LetterHistoryRow>;
    ModifiedDate: Column<LetterHistoryRow>;
    ModifiedUserName: Column<LetterHistoryRow>;
    LetterCarrier: Column<LetterHistoryRow>;
}

export class LetterHistoryColumns extends ColumnsBase<LetterHistoryRow> {
    static readonly columnsKey = 'LetterHistoryDB.LetterHistory';
    static readonly Fields = fieldsProxy<LetterHistoryColumns>();
}