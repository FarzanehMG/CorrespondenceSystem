
using System.ComponentModel;
using Serenity.ComponentModel;

namespace CorrespondenceSystem.Modules.Enums.Letter;


[EnumKey("RelationTypes")]
public enum RelationTypes
{

    [Description("عطف")]
    Connecting = 1,
    [Description("پیرو")]
    Follower = 2,
    [Description("بازگشت")]
    Return = 3,
}