namespace CorrespondenceSystem.Modules.Enums.Letter;


[EnumKey("PriorityState")]
public enum PriorityStates
{
    [Description("فوری")]
    Urgent = 0,
    [Description("آنی")]
    Instant = 1,
    [Description("عادی")]
    Normal = 2,
}


