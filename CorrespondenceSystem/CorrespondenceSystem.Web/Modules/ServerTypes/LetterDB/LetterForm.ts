import { TaskDescriptionEditor } from "@/CounterpartDB/Counterpart/CounterpartEditor";
import { LetterAttachmentEditor } from "@/LetterAttachmentDB/LetterAttachment/LetterAttachmentEditor";
import { RelatedLettersEditor } from "@/RelatedLettersDB/RelatedLetters/RelatedLettersEditor";
import { SignLettersEditor } from "@/SignLettersDB/SignLetters/SignLettersEditor";
import { RadioButtonEditor, StringEditor, ServiceLookupEditor, BooleanEditor, LookupEditor, TextAreaEditor, EnumEditor, ImageUploadEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { ConfidentialLevels } from "../Modules/Enums.Letter.ConfidentialLevels";
import { LetterTypes } from "../Modules/Enums.Letter.LetterTypes";
import { PriorityStates } from "../Modules/Enums.Letter.PriorityStates";
import { States } from "../Modules/Enums.Letter.States";

export interface LetterForm {
    LetterType: RadioButtonEditor;
    PriorityState: RadioButtonEditor;
    ConfidentialLevel: RadioButtonEditor;
    LetterIdentifier: StringEditor;
    LetterIdentifierGen: StringEditor;
    ReceiverId: ServiceLookupEditor;
    SenderId: ServiceLookupEditor;
    UseDefaultTemplate: BooleanEditor;
    TemplateId: LookupEditor;
    LetterNo: StringEditor;
    Title: StringEditor;
    LetterContent: TextAreaEditor;
    Tag: StringEditor;
    LetterCarrier: StringEditor;
    State: EnumEditor;
    GrandSubjectId: ServiceLookupEditor;
    HasAttachment: BooleanEditor;
    NeedAnswer: BooleanEditor;
    DetailList: LetterAttachmentEditor;
    SignLettersDetailList: SignLettersEditor;
    LetterFile: ImageUploadEditor;
    CounterpartDetailList: TaskDescriptionEditor;
    RelatedLetterDetailList: RelatedLettersEditor;
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
            var w2 = ServiceLookupEditor;
            var w3 = BooleanEditor;
            var w4 = LookupEditor;
            var w5 = TextAreaEditor;
            var w6 = EnumEditor;
            var w7 = LetterAttachmentEditor;
            var w8 = SignLettersEditor;
            var w9 = ImageUploadEditor;
            var w10 = TaskDescriptionEditor;
            var w11 = RelatedLettersEditor;

            initFormType(LetterForm, [
                'LetterType', w0,
                'PriorityState', w0,
                'ConfidentialLevel', w0,
                'LetterIdentifier', w1,
                'LetterIdentifierGen', w1,
                'ReceiverId', w2,
                'SenderId', w2,
                'UseDefaultTemplate', w3,
                'TemplateId', w4,
                'LetterNo', w1,
                'Title', w1,
                'LetterContent', w5,
                'Tag', w1,
                'LetterCarrier', w1,
                'State', w6,
                'GrandSubjectId', w2,
                'HasAttachment', w3,
                'NeedAnswer', w3,
                'DetailList', w7,
                'SignLettersDetailList', w8,
                'LetterFile', w9,
                'CounterpartDetailList', w10,
                'RelatedLetterDetailList', w11
            ]);
        }
    }
}

[LetterTypes, PriorityStates, ConfidentialLevels, States]; // referenced types