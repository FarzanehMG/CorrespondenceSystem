import { ServiceLookupEditor, EnumEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { CopyType } from "../Modules/Enums.Letter.CopyType";

export interface CounterpartForm {
    ReciverId: ServiceLookupEditor;
    CopyType: EnumEditor;
}

export class CounterpartForm extends PrefixedContext {
    static readonly formKey = 'CounterpartDB.Counterpart';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!CounterpartForm.init)  {
            CounterpartForm.init = true;

            var w0 = ServiceLookupEditor;
            var w1 = EnumEditor;

            initFormType(CounterpartForm, [
                'ReciverId', w0,
                'CopyType', w1
            ]);
        }
    }
}

[CopyType]; // referenced types