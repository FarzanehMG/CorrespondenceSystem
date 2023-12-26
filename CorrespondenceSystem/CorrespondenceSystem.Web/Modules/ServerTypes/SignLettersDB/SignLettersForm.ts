import { PrefixedContext, StringEditor, IntegerEditor, DateEditor, initFormType } from '@serenity-is/corelib';

export interface SignLettersForm {
    LetterId: StringEditor;
    SignId: StringEditor;
    SignType: IntegerEditor;
    SignDate: DateEditor;
    CreatedDate: DateEditor;
    CreatorUserName: StringEditor;
    ModifiedUserName: StringEditor;
}

export class SignLettersForm extends PrefixedContext {
    static readonly formKey = 'SignLettersDB.SignLetters';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!SignLettersForm.init)  {
                        SignLettersForm.init = true;
            
            var w0 = StringEditor;
            var w1 = IntegerEditor;
            var w2 = DateEditor;

            initFormType(SignLettersForm, [
            'LetterId', w0,
            'SignId', w0,
            'SignType', w1,
            'SignDate', w2,
            'CreatedDate', w2,
            'CreatorUserName', w0,
            'ModifiedUserName', w0,
            ]);
        }
    }
}