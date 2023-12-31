import{c as r,f as a,g as f,i as d}from"../../../_chunks/chunk-THKE7DQS.js";var x=a(d(),1);var S=a(d(),1);var L=class L extends S.ColumnsBase{};r(L,"LetterHistoryColumns"),L.columnsKey="LetterHistoryDB.LetterHistory",L.Fields=(0,S.fieldsProxy)();var g=L;var t=a(d(),1);var p=class p extends t.PrefixedContext{constructor(l){if(super(l),!p.init){p.init=!0;var c=t.ServiceLookupEditor,s=t.IntegerEditor,e=t.StringEditor,v=t.BooleanEditor,u=t.DateEditor;(0,t.initFormType)(p,["LetterId",c,"ActionType",s,"TemplateId",e,"ReceiverId",e,"SenderId",e,"GrandSubjectId",e,"LetterIdentifier",e,"LetterIdentifierGen",e,"LetterNo",e,"Title",e,"LetterContent",e,"Tag",e,"LetterType",s,"State",s,"PriorityState",s,"HasAttachment",v,"CreatedDate",u,"CreatorUserName",e,"ModifiedDate",u,"ModifiedUserName",u,"LetterCarrier",e])}}};r(p,"LetterHistoryForm"),p.formKey="LetterHistoryDB.LetterHistory";var R=p;var I=a(d(),1);var o=class o{};r(o,"LetterHistoryRow"),o.idProperty="Id",o.isActiveProperty="IsActive",o.nameProperty="LetterIdentifier",o.localTextPrefix="LetterHistoryDB.LetterHistory",o.deletePermission="Administration:General",o.insertPermission="Administration:General",o.readPermission="Administration:General",o.updatePermission="Administration:General",o.Fields=(0,I.fieldsProxy)();var m=o;var D=a(d(),1),y;(c=>(c.baseUrl="LetterHistoryDB/LetterHistory",c.Methods={Create:"LetterHistoryDB/LetterHistory/Create",Update:"LetterHistoryDB/LetterHistory/Update",Delete:"LetterHistoryDB/LetterHistory/Delete",Retrieve:"LetterHistoryDB/LetterHistory/Retrieve",List:"LetterHistoryDB/LetterHistory/List"},["Create","Update","Delete","Retrieve","List"].forEach(s=>{c[s]=function(e,v,u){return(0,D.serviceRequest)(c.baseUrl+"/"+s,e,v,u)}})))(y||(y={}));var H=a(d(),1);var C=a(d(),1);var i=class extends C.EntityDialog{constructor(){super(...arguments);this.form=new R(this.idPrefix)}getFormKey(){return R.formKey}getRowDefinition(){return m}getService(){return y.baseUrl}};r(i,"LetterHistoryDialog"),i=f([C.Decorators.registerClass("CorrespondenceSystem.LetterHistoryDB.LetterHistoryDialog")],i);var n=class extends H.EntityGrid{getColumnsKey(){return g.columnsKey}getDialogType(){return i}getRowDefinition(){return m}getService(){return y.baseUrl}constructor(l){super(l)}};r(n,"LetterHistoryGrid"),n=f([H.Decorators.registerClass("CorrespondenceSystem.LetterHistoryDB.LetterHistoryGrid")],n);function T(){(0,x.initFullHeightGridPage)(new n($("#GridDiv")).element)}r(T,"pageInit");export{T as default};
//# sourceMappingURL=LetterHistoryPage.js.map
