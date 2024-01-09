namespace CorrespondenceSystem.Modules.Enums.Letter;

[EnumKey("LetterTypes")]
public enum LetterTypes
{
    [Description("صادره")]
    Outgoing = 0,
    [Description("وارده")]
    Incoming = 1,
    [Description("صورت جلسه")]
    Proceedings = 2
}
