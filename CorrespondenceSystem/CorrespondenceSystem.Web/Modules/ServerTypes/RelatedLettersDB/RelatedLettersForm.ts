import { ServiceLookupEditor, EnumEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { RelationTypes } from "../Modules/Global.RelationTypes";

export interface RelatedLettersForm {
    RelatedLetterId: ServiceLookupEditor;
    RelationType: EnumEditor;
}

export class RelatedLettersForm extends PrefixedContext {
    static readonly formKey = 'RelatedLettersDB.RelatedLetters';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!RelatedLettersForm.init)  {
            RelatedLettersForm.init = true;

            var w0 = ServiceLookupEditor;
            var w1 = EnumEditor;

            initFormType(RelatedLettersForm, [
                'RelatedLetterId', w0,
                'RelationType', w1
            ]);
        }
    }
}

[RelationTypes]; // referenced types