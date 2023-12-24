import { PrefixedContext, StringEditor, BooleanEditor, DateEditor, initFormType } from '@serenity-is/corelib';

export interface RecriverSenderForm {
    Name: StringEditor;
    IsDefault: BooleanEditor;
    CreatedDate: DateEditor;
    CreatorUserName: StringEditor;
    ModifiedDate: DateEditor;
    ModifiedUserName: StringEditor;
    TimeStamp: StringEditor;
}

export class RecriverSenderForm extends PrefixedContext {
    static readonly formKey = 'RecriverSenderDB.RecriverSender';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!RecriverSenderForm.init)  {
                        RecriverSenderForm.init = true;
            
            var w0 = StringEditor;
            var w1 = BooleanEditor;
            var w2 = DateEditor;

            initFormType(RecriverSenderForm, [
            'Name', w0,
            'IsDefault', w1,
            'CreatedDate', w2,
            'CreatorUserName', w0,
            'ModifiedDate', w2,
            'ModifiedUserName', w0,
            'TimeStamp', w0,
            ]);
        }
    }
}