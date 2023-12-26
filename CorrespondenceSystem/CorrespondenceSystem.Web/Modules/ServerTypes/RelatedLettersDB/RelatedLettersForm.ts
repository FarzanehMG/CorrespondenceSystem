import { PrefixedContext, StringEditor, IntegerEditor, DateEditor, initFormType } from '@serenity-is/corelib';

export interface RelatedLettersForm {
    LetterId: StringEditor;
    RelatedLetterId: StringEditor;
    RelationType: IntegerEditor;
    CreatedDate: DateEditor;
    CreatorUserName: StringEditor;
    ModifiedDate: DateEditor;
    ModifiedUserName: StringEditor;
}

export class RelatedLettersForm extends PrefixedContext {
    static readonly formKey = 'RelatedLettersDB.RelatedLetters';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!RelatedLettersForm.init)  {
                        RelatedLettersForm.init = true;
            
            var w0 = StringEditor;
            var w1 = IntegerEditor;
            var w2 = DateEditor;

            initFormType(RelatedLettersForm, [
            'LetterId', w0,
            'RelatedLetterId', w0,
            'RelationType', w1,
            'CreatedDate', w2,
            'CreatorUserName', w0,
            'ModifiedDate', w2,
            'ModifiedUserName', w0,
            ]);
        }
    }
}