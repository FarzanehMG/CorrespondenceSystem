import { PrefixedContext, StringEditor, IntegerEditor, BooleanEditor, DateEditor, initFormType } from '@serenity-is/corelib';

export interface LetterHistoryForm {
    LetterId: StringEditor;
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
            
            var w0 = StringEditor;
            var w1 = IntegerEditor;
            var w2 = BooleanEditor;
            var w3 = DateEditor;

            initFormType(LetterHistoryForm, [
            'LetterId', w0,
            'ActionType', w1,
            'TemplateId', w0,
            'ReceiverId', w0,
            'SenderId', w0,
            'GrandSubjectId', w0,
            'LetterIdentifier', w0,
            'LetterIdentifierGen', w0,
            'LetterNo', w0,
            'Title', w0,
            'LetterContent', w0,
            'Tag', w0,
            'LetterType', w1,
            'State', w1,
            'PriorityState', w1,
            'HasAttachment', w2,
            'CreatedDate', w3,
            'CreatorUserName', w0,
            'ModifiedDate', w3,
            'ModifiedUserName', w3,
            'LetterCarrier', w0,
            ]);
        }
    }
}