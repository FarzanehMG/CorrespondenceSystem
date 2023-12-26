import { StringEditor, ImageUploadEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface LetterAttachmentForm {
    Title: StringEditor;
    AttachmentFile: ImageUploadEditor;
}

export class LetterAttachmentForm extends PrefixedContext {
    static readonly formKey = 'LetterAttachmentDB.LetterAttachment';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!LetterAttachmentForm.init)  {
            LetterAttachmentForm.init = true;

            var w0 = StringEditor;
            var w1 = ImageUploadEditor;

            initFormType(LetterAttachmentForm, [
                'Title', w0,
                'AttachmentFile', w1
            ]);
        }
    }
}