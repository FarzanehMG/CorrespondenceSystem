import { Decorators } from "@serenity-is/corelib";

export enum RelationTypes {
    Connecting = 1,
    Follower = 2,
    Return = 3
}
Decorators.registerEnumType(RelationTypes, 'CorrespondenceSystem.Modules.Enums.Letter.RelationTypes', 'RelationTypes');