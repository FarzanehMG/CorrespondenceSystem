import { fieldsProxy } from "@serenity-is/corelib";
import { CounterpartRow } from "../CounterpartDB/CounterpartRow";
import { LetterAttachmentRow } from "../LetterAttachmentDB/LetterAttachmentRow";
import { RelatedLettersRow } from "../RelatedLettersDB/RelatedLettersRow";
import { SignLettersRow } from "../SignLettersDB/SignLettersRow";

export interface LetterRow {
    Id?: string;
    UseDefaultTemplate?: boolean;
    TemplateId?: string;
    SenderId?: string;
    ReceiverId?: string;
    GrandSubjectId?: string;
    LetterIdentifier?: string;
    LetterIdentifierGen?: string;
    LetterNo?: string;
    Title?: string;
    LetterContent?: string;
    Tag?: string;
    LetterType?: number;
    State?: number;
    PriorityState?: number;
    ConfidentialLevel?: number;
    HasAttachment?: boolean;
    CreatedDate?: string;
    CreatorUserName?: string;
    ModifiedDate?: string;
    ModifiedUserName?: string;
    LetterCarrier?: string;
    NeedAnswer?: boolean;
    LetterFile?: string;
    ListOfAttendees?: string;
    TemplateTitle?: string;
    SenderName?: string;
    ReceiverName?: string;
    GrandSubjectTitle?: string;
    IsActive?: number;
    DetailList?: LetterAttachmentRow[];
    SignLettersDetailList?: SignLettersRow[];
    CounterpartDetailList?: CounterpartRow[];
    RelatedLetterDetailList?: RelatedLettersRow[];
}

export abstract class LetterRow {
    static readonly idProperty = 'Id';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'LetterIdentifier';
    static readonly localTextPrefix = 'LetterDB.Letter';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<LetterRow>();
}