import { BooleanEditor, StringEditor, IntegerEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface LetterForm {
    UseDefaultTemplate: BooleanEditor;
    LetterNo: StringEditor;
    Title: StringEditor;
    LetterContent: StringEditor;
    Tag: StringEditor;
    LetterType: IntegerEditor;
    State: IntegerEditor;
    PriorityState: IntegerEditor;
    ConfidentialLevel: IntegerEditor;
    HasAttachment: BooleanEditor;
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

            initFormType(LetterForm, [
                'UseDefaultTemplate', w0,
                'LetterNo', w1,
                'Title', w1,
                'LetterContent', w1,
                'Tag', w1,
                'LetterType', w2,
                'State', w2,
                'PriorityState', w2,
                'ConfidentialLevel', w2,
                'HasAttachment', w0,
                'TimeStamp', w1,
                'LetterCarrier', w1,
                'NeedAnswer', w0,
                'LetterFile', w1
            ]);
        }
    }
}