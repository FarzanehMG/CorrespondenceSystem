import { LetterAttachmentEditor } from "@/LetterAttachmentDB/LetterAttachment/LetterAttachmentEditor";
import { BooleanEditor, StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface LetterForm {
    UseDefaultTemplate: BooleanEditor;
    LetterNo: StringEditor;
    Title: StringEditor;
    LetterContent: StringEditor;
    Tag: StringEditor;
    HasAttachment: BooleanEditor;
    LetterCarrier: StringEditor;
    NeedAnswer: BooleanEditor;
    LetterFile: StringEditor;
    DetailList: LetterAttachmentEditor;
}

export class LetterForm extends PrefixedContext {
    static readonly formKey = 'LetterDB.Letter';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!LetterForm.init)  {
            LetterForm.init = true;

            var w0 = BooleanEditor;
            var w1 = StringEditor;
            var w2 = LetterAttachmentEditor;

            initFormType(LetterForm, [
                'UseDefaultTemplate', w0,
                'LetterNo', w1,
                'Title', w1,
                'LetterContent', w1,
                'Tag', w1,
                'HasAttachment', w0,
                'LetterCarrier', w1,
                'NeedAnswer', w0,
                'LetterFile', w1,
                'DetailList', w2
            ]);
        }
    }
}