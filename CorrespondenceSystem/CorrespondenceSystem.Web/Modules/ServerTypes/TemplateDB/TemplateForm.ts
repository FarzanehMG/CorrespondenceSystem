import { PrefixedContext, StringEditor, BooleanEditor, DateEditor, initFormType } from '@serenity-is/corelib';

export interface TemplateForm {
    Title: StringEditor;
    TemplateFile: StringEditor;
    IsDefault: BooleanEditor;
    CreatedDate: DateEditor;
    CreatorUserName: StringEditor;
    ModifiedDate: DateEditor;
    ModifiedUserName: StringEditor;
}

export class TemplateForm extends PrefixedContext {
    static readonly formKey = 'TemplateDB.Template';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!TemplateForm.init)  {
                        TemplateForm.init = true;
            
            var w0 = StringEditor;
            var w1 = BooleanEditor;
            var w2 = DateEditor;

            initFormType(TemplateForm, [
            'Title', w0,
            'TemplateFile', w0,
            'IsDefault', w1,
            'CreatedDate', w2,
            'CreatorUserName', w0,
            'ModifiedDate', w2,
            'ModifiedUserName', w0,
            ]);
        }
    }
}