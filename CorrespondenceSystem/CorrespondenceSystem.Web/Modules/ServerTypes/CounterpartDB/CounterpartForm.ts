import { ServiceLookupEditor, IntegerEditor, DateEditor, StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface CounterpartForm {
    LetterId: ServiceLookupEditor;
    ReciverId: ServiceLookupEditor;
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

            var w0 = ServiceLookupEditor;
            var w1 = IntegerEditor;
            var w2 = DateEditor;
            var w3 = StringEditor;

            initFormType(CounterpartForm, [
                'LetterId', w0,
                'ReciverId', w0,
                'CopyType', w1,
                'CreatedDate', w2,
                'CreatorUserName', w3,
                'ModifiedDate', w2,
                'ModifiedUserName', w3
            ]);
        }
    }
}