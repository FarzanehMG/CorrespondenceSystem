﻿import { Decorators } from "@serenity-is/corelib";

export enum LetterTypes {
    Outgoing = 0,
    Incoming = 1,
    Proceedings = 2
}
Decorators.registerEnumType(LetterTypes, 'CorrespondenceSystem.Modules.Enums.Letter.LetterTypes', 'LetterTypes');