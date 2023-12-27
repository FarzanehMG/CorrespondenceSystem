import { Decorators } from "@serenity-is/corelib";

export enum States {
    Draft = 0,
    Posted = 1,
    Received = 2
}
Decorators.registerEnumType(States, 'CorrespondenceSystem.Modules.Enums.Letter.States', 'State');