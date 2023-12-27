import { StringEditor, TextAreaEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface GrandSubjectForm {
    Title: StringEditor;
    Description: TextAreaEditor;
    LetterDetail: StringEditor;
}

export class GrandSubjectForm extends PrefixedContext {
    static readonly formKey = 'GrandSubjectDB.GrandSubject';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!GrandSubjectForm.init)  {
            GrandSubjectForm.init = true;

            var w0 = StringEditor;
            var w1 = TextAreaEditor;

            initFormType(GrandSubjectForm, [
                'Title', w0,
                'Description', w1,
                'LetterDetail', w0
            ]);
        }
    }
}