import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { LetterRow } from "./LetterRow";

export interface LetterColumns {
    Id: Column<LetterRow>;
    UseDefaultTemplate: Column<LetterRow>;
    TemplateTitle: Column<LetterRow>;
    SenderName: Column<LetterRow>;
    ReceiverName: Column<LetterRow>;
    GrandSubjectTitle: Column<LetterRow>;
    LetterIdentifier: Column<LetterRow>;
    LetterIdentifierGen: Column<LetterRow>;
    LetterNo: Column<LetterRow>;
    Title: Column<LetterRow>;
    LetterContent: Column<LetterRow>;
    Tag: Column<LetterRow>;
    LetterType: Column<LetterRow>;
    State: Column<LetterRow>;
    PriorityState: Column<LetterRow>;
    ConfidentialLevel: Column<LetterRow>;
    HasAttachment: Column<LetterRow>;
    CreatedDate: Column<LetterRow>;
    CreatorUserName: Column<LetterRow>;
    ModifiedDate: Column<LetterRow>;
    ModifiedUserName: Column<LetterRow>;
    LetterCarrier: Column<LetterRow>;
    NeedAnswer: Column<LetterRow>;
    LetterFile: Column<LetterRow>;
}

export class LetterColumns extends ColumnsBase<LetterRow> {
    static readonly columnsKey = 'LetterDB.Letter';
    static readonly Fields = fieldsProxy<LetterColumns>();
}