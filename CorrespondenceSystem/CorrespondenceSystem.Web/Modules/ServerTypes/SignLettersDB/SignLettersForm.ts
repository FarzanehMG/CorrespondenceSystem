import { ServiceLookupEditor, IntegerEditor, DateEditor, StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface SignLettersForm {
    LetterId: ServiceLookupEditor;
    SignId: ServiceLookupEditor;
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

            var w0 = ServiceLookupEditor;
            var w1 = IntegerEditor;
            var w2 = DateEditor;
            var w3 = StringEditor;

            initFormType(SignLettersForm, [
                'LetterId', w0,
                'SignId', w0,
                'SignType', w1,
                'SignDate', w2,
                'CreatedDate', w2,
                'CreatorUserName', w3,
                'ModifiedUserName', w3
            ]);
        }
    }
}