import { StringEditor, ImageUploadEditor, BooleanEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface TemplateForm {
    Title: StringEditor;
    TemplateFile: ImageUploadEditor;
    IsDefault: BooleanEditor;
}

export class TemplateForm extends PrefixedContext {
    static readonly formKey = 'TemplateDB.Template';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!TemplateForm.init)  {
            TemplateForm.init = true;

            var w0 = StringEditor;
            var w1 = ImageUploadEditor;
            var w2 = BooleanEditor;

            initFormType(TemplateForm, [
                'Title', w0,
                'TemplateFile', w1,
                'IsDefault', w2
            ]);
        }
    }
}