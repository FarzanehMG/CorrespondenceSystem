using System;
using System.ComponentModel;
using Serenity.ComponentModel;

namespace CorrespondenceSystem.Modules.Enums.Letter;


[EnumKey("CopyType")]
public enum CopyType
{

    [Description("رو نوشت")]
    Copy = 1,
    [Description("جهت اطلاع")]
    ForInformation = 2,
}
