﻿import { ServiceLookupEditor, StringEditor, DateEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface LetterAttachmentForm {
    LetterId: ServiceLookupEditor;
    Title: StringEditor;
    AttachmentFile: StringEditor;
    CreatedDate: DateEditor;
    CreatorUserName: StringEditor;
    ModifiedDate: DateEditor;
    ModifiedUserName: StringEditor;
    TimeStamp: StringEditor;
}

export class LetterAttachmentForm extends PrefixedContext {
    static readonly formKey = 'LetterAttachmentDB.LetterAttachment';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!LetterAttachmentForm.init)  {
            LetterAttachmentForm.init = true;

            var w0 = ServiceLookupEditor;
            var w1 = StringEditor;
            var w2 = DateEditor;

            initFormType(LetterAttachmentForm, [
                'LetterId', w0,
                'Title', w1,
                'AttachmentFile', w1,
                'CreatedDate', w2,
                'CreatorUserName', w1,
                'ModifiedDate', w2,
                'ModifiedUserName', w1,
                'TimeStamp', w1
            ]);
        }
    }
}