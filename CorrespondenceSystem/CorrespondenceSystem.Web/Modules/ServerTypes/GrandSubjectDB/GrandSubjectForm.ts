﻿import { StringEditor, DateEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface GrandSubjectForm {
    Title: StringEditor;
    Description: StringEditor;
    CreatedDate: DateEditor;
    CreatorUserName: StringEditor;
    ModifiedDate: DateEditor;
    ModifiedUserName: StringEditor;
}

export class GrandSubjectForm extends PrefixedContext {
    static readonly formKey = 'GrandSubjectDB.GrandSubject';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!GrandSubjectForm.init)  {
            GrandSubjectForm.init = true;

            var w0 = StringEditor;
            var w1 = DateEditor;

            initFormType(GrandSubjectForm, [
                'Title', w0,
                'Description', w0,
                'CreatedDate', w1,
                'CreatorUserName', w0,
                'ModifiedDate', w1,
                'ModifiedUserName', w0
            ]);
        }
    }
}