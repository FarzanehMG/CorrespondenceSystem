import{c as e,f as n,g,i as s}from"../../../_chunks/chunk-THKE7DQS.js";var C=n(s(),1);var S=n(s(),1);var m=class m extends S.ColumnsBase{};e(m,"SignColumns"),m.columnsKey="SignDB.Sign",m.Fields=(0,S.fieldsProxy)();var y=m;var r=n(s(),1);var a=class a extends r.PrefixedContext{constructor(l){if(super(l),!a.init){a.init=!0;var p=r.StringEditor,f=r.ImageUploadEditor;(0,r.initFormType)(a,["Title",p,"SignAttachment",f])}}};e(a,"SignForm"),a.formKey="SignDB.Sign";var u=a;var x=n(s(),1);var t=class t{};e(t,"SignRow"),t.idProperty="Id",t.nameProperty="Title",t.localTextPrefix="SignDB.Sign",t.deletePermission="Administration:General",t.insertPermission="Administration:General",t.readPermission="Administration:General",t.updatePermission="Administration:General",t.Fields=(0,x.fieldsProxy)();var c=t;var D=n(s(),1),d;(p=>(p.baseUrl="SignDB/Sign",p.Methods={Create:"SignDB/Sign/Create",Update:"SignDB/Sign/Update",Delete:"SignDB/Sign/Delete",Retrieve:"SignDB/Sign/Retrieve",List:"SignDB/Sign/List"},["Create","Update","Delete","Retrieve","List"].forEach(f=>{p[f]=function(U,B,P){return(0,D.serviceRequest)(p.baseUrl+"/"+f,U,B,P)}})))(d||(d={}));var v=n(s(),1);var R=n(s(),1);var o=class extends R.EntityDialog{constructor(){super(...arguments);this.form=new u(this.idPrefix)}getFormKey(){return u.formKey}getRowDefinition(){return c}getService(){return d.baseUrl}};e(o,"SignDialog"),o=g([R.Decorators.registerClass("CorrespondenceSystem.SignDB.SignDialog")],o);var i=class extends v.EntityGrid{getColumnsKey(){return y.columnsKey}getDialogType(){return o}getRowDefinition(){return c}getService(){return d.baseUrl}constructor(l){super(l)}};e(i,"SignGrid"),i=g([v.Decorators.registerClass("CorrespondenceSystem.SignDB.SignGrid")],i);function w(){(0,C.initFullHeightGridPage)(new i($("#GridDiv")).element)}e(w,"pageInit");export{w as default};
//# sourceMappingURL=SignPage.js.map
