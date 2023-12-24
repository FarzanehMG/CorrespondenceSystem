import { BooleanEditor, StringEditor, IntegerEditor, DateEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface LetterForm {
    UseDefaultTemplate: BooleanEditor;
    TemplateId: StringEditor;
    SenderId: StringEditor;
    ReceiverId: StringEditor;
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
    ConfidentialLevel: IntegerEditor;
    HasAttachment: BooleanEditor;
    CreatedDate: DateEditor;
    CreatorUserName: StringEditor;
    ModifiedDate: DateEditor;
    ModifiedUserName: DateEditor;
    TimeStamp: StringEditor;
    LetterCarrier: StringEditor;
    NeedAnswer: BooleanEditor;
    LetterFile: StringEditor;
}

export class LetterForm extends PrefixedContext {
    static readonly formKey = 'LetterDB.Letter';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!LetterForm.init)  {
            LetterForm.init = true;

            var w0 = BooleanEditor;
            var w1 = StringEditor;
            var w2 = IntegerEditor;
            var w3 = DateEditor;

            initFormType(LetterForm, [
                'UseDefaultTemplate', w0,
                'TemplateId', w1,
                'SenderId', w1,
                'ReceiverId', w1,
                'GrandSubjectId', w1,
                'LetterIdentifier', w1,
                'LetterIdentifierGen', w1,
                'LetterNo', w1,
                'Title', w1,
                'LetterContent', w1,
                'Tag', w1,
                'LetterType', w2,
                'State', w2,
                'PriorityState', w2,
                'ConfidentialLevel', w2,
                'HasAttachment', w0,
                'CreatedDate', w3,
                'CreatorUserName', w1,
                'ModifiedDate', w3,
                'ModifiedUserName', w3,
                'TimeStamp', w1,
                'LetterCarrier', w1,
                'NeedAnswer', w0,
                'LetterFile', w1
            ]);
        }
    }
}