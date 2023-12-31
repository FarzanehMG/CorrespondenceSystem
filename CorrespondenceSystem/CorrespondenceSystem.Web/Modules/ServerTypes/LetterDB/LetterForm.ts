import { LetterAttachmentEditor } from "@/LetterAttachmentDB/LetterAttachment/LetterAttachmentEditor";
import { SignLettersEditor } from "@/SignLettersDB/SignLetters/SignLettersEditor";
import { RadioButtonEditor, StringEditor, EnumEditor, ServiceLookupEditor, BooleanEditor, LookupEditor, TextAreaEditor, ImageUploadEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { ConfidentialLevels } from "../Modules/Enums.Letter.ConfidentialLevels";
import { LetterTypes } from "../Modules/Enums.Letter.LetterTypes";
import { PriorityStates } from "../Modules/Enums.Letter.PriorityStates";
import { States } from "../Modules/Enums.Letter.States";

export interface LetterForm {
    LetterType: RadioButtonEditor;
    Title: StringEditor;
    LetterIdentifier: StringEditor;
    LetterIdentifierGen: StringEditor;
    LetterNo: StringEditor;
    PriorityState: RadioButtonEditor;
    ConfidentialLevel: RadioButtonEditor;
    State: EnumEditor;
    SenderId: ServiceLookupEditor;
    ReceiverId: ServiceLookupEditor;
    GrandSubjectId: ServiceLookupEditor;
    UseDefaultTemplate: BooleanEditor;
    TemplateId: LookupEditor;
    LetterContent: TextAreaEditor;
    Tag: StringEditor;
    LetterCarrier: StringEditor;
    HasAttachment: BooleanEditor;
    NeedAnswer: BooleanEditor;
    DetailList: LetterAttachmentEditor;
    SignLettersDetailList: SignLettersEditor;
    LetterFile: ImageUploadEditor;
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
            var w2 = EnumEditor;
            var w3 = ServiceLookupEditor;
            var w4 = BooleanEditor;
            var w5 = LookupEditor;
            var w6 = TextAreaEditor;
            var w7 = LetterAttachmentEditor;
            var w8 = SignLettersEditor;
            var w9 = ImageUploadEditor;

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
                'TemplateId', w5,
                'LetterContent', w6,
                'Tag', w1,
                'LetterCarrier', w1,
                'HasAttachment', w4,
                'NeedAnswer', w4,
                'DetailList', w7,
                'SignLettersDetailList', w8,
                'LetterFile', w9
            ]);
        }
    }
}

[LetterTypes, PriorityStates, ConfidentialLevels, States]; // referenced types