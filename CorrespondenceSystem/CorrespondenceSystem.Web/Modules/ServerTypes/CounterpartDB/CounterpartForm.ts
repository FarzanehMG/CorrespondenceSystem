import { PrefixedContext, StringEditor, IntegerEditor, DateEditor, initFormType } from '@serenity-is/corelib';

export interface CounterpartForm {
    LetterId: StringEditor;
    ReciverId: StringEditor;
    CopyType: IntegerEditor;
    CreatedDate: DateEditor;
    CreatorUserName: StringEditor;
    ModifiedDate: DateEditor;
    ModifiedUserName: StringEditor;
}

export class CounterpartForm extends PrefixedContext {
    static readonly formKey = 'CounterpartDB.Counterpart';
    private static init: boolean;
    
    constructor(prefix: string) {
        super(prefix);
        if (!CounterpartForm.init)  {
                        CounterpartForm.init = true;
            
            var w0 = StringEditor;
            var w1 = IntegerEditor;
            var w2 = DateEditor;

            initFormType(CounterpartForm, [
            'LetterId', w0,
            'ReciverId', w0,
            'CopyType', w1,
            'CreatedDate', w2,
            'CreatorUserName', w0,
            'ModifiedDate', w2,
            'ModifiedUserName', w0,
            ]);
        }
    }
}