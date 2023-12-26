import { LetterAttachmentEditor } from "@/LetterAttachmentDB/LetterAttachment/LetterAttachmentEditor";
import { RadioButtonEditor, StringEditor, IntegerEditor, ServiceLookupEditor, BooleanEditor, TextAreaEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { ConfidentialLevels } from "../Modules/Enums.Letter.ConfidentialLevels";
import { LetterTypes } from "../Modules/Enums.Letter.LetterTypes";
import { PriorityStates } from "../Modules/Enums.Letter.PriorityStates";

export interface LetterForm {
    LetterType: RadioButtonEditor;
    Title: StringEditor;
    LetterIdentifier: StringEditor;
    LetterIdentifierGen: StringEditor;
    LetterNo: StringEditor;
    PriorityState: RadioButtonEditor;
    ConfidentialLevel: RadioButtonEditor;
    State: IntegerEditor;
    SenderId: ServiceLookupEditor;
    ReceiverId: ServiceLookupEditor;
    GrandSubjectId: ServiceLookupEditor;
    UseDefaultTemplate: BooleanEditor;
    TemplateId: StringEditor;
    LetterContent: TextAreaEditor;
    Tag: StringEditor;
    LetterCarrier: StringEditor;
    HasAttachment: BooleanEditor;
    NeedAnswer: BooleanEditor;
    DetailList: LetterAttachmentEditor;
}

export class LetterForm extends PrefixedContext {
    static readonly formKey = 'LetterDB.Letter';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!LetterForm.init)  {
            LetterForm.init = true;

            var w0 = RadioButtonEditor;
            var w1 = StringEditor;
            var w2 = IntegerEditor;
            var w3 = ServiceLookupEditor;
            var w4 = BooleanEditor;
            var w5 = TextAreaEditor;
            var w6 = LetterAttachmentEditor;

            initFormType(LetterForm, [
                'LetterType', w0,
                'Title', w1,
                'LetterIdentifier', w1,
                'LetterIdentifierGen', w1,
                'LetterNo', w1,
                'PriorityState', w0,
                'ConfidentialLevel', w0,
                'State', w2,
                'SenderId', w3,
                'ReceiverId', w3,
                'GrandSubjectId', w3,
                'UseDefaultTemplate', w4,
                'TemplateId', w1,
                'LetterContent', w5,
                'Tag', w1,
                'LetterCarrier', w1,
                'HasAttachment', w4,
                'NeedAnswer', w4,
                'DetailList', w6
            ]);
        }
    }
}

[LetterTypes, PriorityStates, ConfidentialLevels]; // referenced types