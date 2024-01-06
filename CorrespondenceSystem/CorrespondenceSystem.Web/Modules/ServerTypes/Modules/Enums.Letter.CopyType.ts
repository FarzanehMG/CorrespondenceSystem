import { Decorators } from "@serenity-is/corelib";

export enum CopyType {
    Copy = 1,
    ForInformation = 2
}
Decorators.registerEnumType(CopyType, 'CorrespondenceSystem.Modules.Enums.Letter.CopyType', 'CopyType');