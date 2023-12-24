import { ServiceLookupEditor, StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface LetterAttachmentForm {
    LetterId: ServiceLookupEditor;
    Title: StringEditor;
    AttachmentFile: StringEditor;
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

            initFormType(LetterAttachmentForm, [
                'LetterId', w0,
                'Title', w1,
                'AttachmentFile', w1
            ]);
        }
    }
}