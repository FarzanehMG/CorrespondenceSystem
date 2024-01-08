namespace CorrespondenceSystem.Modules.Enums.Letter;

[EnumKey("State")]
public enum States
{
    [Description("پیش نویس")]
    Draft = 0,
    [Description("ارسال شده")]
    Posted = 1,
    [Description("دریافت شده")]
    Received = 2,
}


