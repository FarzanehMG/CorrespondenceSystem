import { LetterAttachmentEditor } from "@/LetterAttachmentDB/LetterAttachment/LetterAttachmentEditor";
import { BooleanEditor, ServiceLookupEditor, StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface LetterForm {
    UseDefaultTemplate: BooleanEditor;
    SenderId: ServiceLookupEditor;
    ReceiverId: ServiceLookupEditor;
    GrandSubjectId: ServiceLookupEditor;
    LetterIdentifier: StringEditor;
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
            var w1 = ServiceLookupEditor;
            var w2 = StringEditor;
            var w3 = LetterAttachmentEditor;

            initFormType(LetterForm, [
                'UseDefaultTemplate', w0,
                'SenderId', w1,
                'ReceiverId', w1,
                'GrandSubjectId', w1,
                'LetterIdentifier', w2,
                'LetterNo', w2,
                'Title', w2,
                'LetterContent', w2,
                'Tag', w2,
                'HasAttachment', w0,
                'LetterCarrier', w2,
                'NeedAnswer', w0,
                'LetterFile', w2,
                'DetailList', w3
            ]);
        }
    }
}