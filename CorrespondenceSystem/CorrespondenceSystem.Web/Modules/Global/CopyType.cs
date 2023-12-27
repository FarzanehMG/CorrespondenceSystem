namespace CorrespondenceSystem.Modules.Global;



    using System;
    using System.ComponentModel;
    using Serenity.ComponentModel;

    [EnumKey("CopyType")]
    public enum CopyType
    {

        [Description("رو نوشت")]
        Copy = 1,
        [Description("جهت اطلاع")]
        ForInformation = 2,
    }

