namespace CorrespondenceSystem.Modules.Enums.Letter;

[EnumKey("ConfidentialLevels")]

public enum ConfidentialLevels
{
    [Description("عادی")]
    Normal = 0,
    [Description("محرمانه")]
    Secret = 1,
}
