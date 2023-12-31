import { StringEditor, ImageUploadEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface SignForm {
    Title: StringEditor;
    SignAttachment: ImageUploadEditor;
}

export class SignForm extends PrefixedContext {
    static readonly formKey = 'SignDB.Sign';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!SignForm.init)  {
            SignForm.init = true;

            var w0 = StringEditor;
            var w1 = ImageUploadEditor;

            initFormType(SignForm, [
                'Title', w0,
                'SignAttachment', w1
            ]);
        }
    }
}