import { Decorators } from "@serenity-is/corelib";

export enum PriorityStates {
    Urgent = 0,
    Instant = 1,
    Normal = 2
}
Decorators.registerEnumType(PriorityStates, 'CorrespondenceSystem.Modules.Enums.Letter.PriorityStates', 'PriorityState');