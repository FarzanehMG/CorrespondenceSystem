import { ServiceLookupEditor, StringEditor, IntegerEditor, DateEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface RelatedLettersForm {
    LetterId: ServiceLookupEditor;
    RelatedLetterId: StringEditor;
    RelationType: IntegerEditor;
    CreatedDate: DateEditor;
    CreatorUserName: StringEditor;
    ModifiedDate: DateEditor;
    ModifiedUserName: StringEditor;
}

export class RelatedLettersForm extends PrefixedContext {
    static readonly formKey = 'RelatedLettersDB.RelatedLetters';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!RelatedLettersForm.init)  {
            RelatedLettersForm.init = true;

            var w0 = ServiceLookupEditor;
            var w1 = StringEditor;
            var w2 = IntegerEditor;
            var w3 = DateEditor;

            initFormType(RelatedLettersForm, [
                'LetterId', w0,
                'RelatedLetterId', w1,
                'RelationType', w2,
                'CreatedDate', w3,
                'CreatorUserName', w1,
                'ModifiedDate', w3,
                'ModifiedUserName', w1
            ]);
        }
    }
}