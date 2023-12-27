import { StringEditor, DateEditor, IntegerEditor, BooleanEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface SignForm {
    Title: StringEditor;
    SignAttachment: StringEditor;
    CreatedDate: DateEditor;
    CreatorUserName: StringEditor;
    ModifiedDate: DateEditor;
    ModifiedUserName: StringEditor;
    UserId: IntegerEditor;
    IsLast: BooleanEditor;
}

export class SignForm extends PrefixedContext {
    static readonly formKey = 'SignDB.Sign';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!SignForm.init)  {
            SignForm.init = true;

            var w0 = StringEditor;
            var w1 = DateEditor;
            var w2 = IntegerEditor;
            var w3 = BooleanEditor;

            initFormType(SignForm, [
                'Title', w0,
                'SignAttachment', w0,
                'CreatedDate', w1,
                'CreatorUserName', w0,
                'ModifiedDate', w1,
                'ModifiedUserName', w0,
                'UserId', w2,
                'IsLast', w3
            ]);
        }
    }
}