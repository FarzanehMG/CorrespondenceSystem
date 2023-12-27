import { ServiceLookupEditor, IntegerEditor, StringEditor, BooleanEditor, DateEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface LetterHistoryForm {
    LetterId: ServiceLookupEditor;
    ActionType: IntegerEditor;
    TemplateId: StringEditor;
    ReceiverId: StringEditor;
    SenderId: StringEditor;
    GrandSubjectId: StringEditor;
    LetterIdentifier: StringEditor;
    LetterIdentifierGen: StringEditor;
    LetterNo: StringEditor;
    Title: StringEditor;
    LetterContent: StringEditor;
    Tag: StringEditor;
    LetterType: IntegerEditor;
    State: IntegerEditor;
    PriorityState: IntegerEditor;
    HasAttachment: BooleanEditor;
    CreatedDate: DateEditor;
    CreatorUserName: StringEditor;
    ModifiedDate: DateEditor;
    ModifiedUserName: DateEditor;
    LetterCarrier: StringEditor;
}

export class LetterHistoryForm extends PrefixedContext {
    static readonly formKey = 'LetterHistoryDB.LetterHistory';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!LetterHistoryForm.init)  {
            LetterHistoryForm.init = true;

            var w0 = ServiceLookupEditor;
            var w1 = IntegerEditor;
            var w2 = StringEditor;
            var w3 = BooleanEditor;
            var w4 = DateEditor;

            initFormType(LetterHistoryForm, [
                'LetterId', w0,
                'ActionType', w1,
                'TemplateId', w2,
                'ReceiverId', w2,
                'SenderId', w2,
                'GrandSubjectId', w2,
                'LetterIdentifier', w2,
                'LetterIdentifierGen', w2,
                'LetterNo', w2,
                'Title', w2,
                'LetterContent', w2,
                'Tag', w2,
                'LetterType', w1,
                'State', w1,
                'PriorityState', w1,
                'HasAttachment', w3,
                'CreatedDate', w4,
                'CreatorUserName', w2,
                'ModifiedDate', w4,
                'ModifiedUserName', w4,
                'LetterCarrier', w2
            ]);
        }
    }
}