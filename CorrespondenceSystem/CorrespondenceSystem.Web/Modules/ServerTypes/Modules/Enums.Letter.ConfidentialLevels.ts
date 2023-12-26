import { Decorators } from "@serenity-is/corelib";

export enum ConfidentialLevels {
    Normal = 0,
    Secret = 1
}
Decorators.registerEnumType(ConfidentialLevels, 'CorrespondenceSystem.Modules.Enums.Letter.ConfidentialLevels', 'ConfidentialLevels');