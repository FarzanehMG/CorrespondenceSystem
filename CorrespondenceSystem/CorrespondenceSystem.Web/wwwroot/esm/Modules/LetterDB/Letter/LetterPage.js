import{a as U,b as G,d as w,e as N}from"../../../_chunks/chunk-AOT74SIV.js";import{a as b,b as h,d as q}from"../../../_chunks/chunk-VZE3TCTK.js";import{c as o,f as i,g as d,i as n}from"../../../_chunks/chunk-THKE7DQS.js";var X=i(n(),1);var C=i(n(),1);var K=i(n(),1),D=(e=>(e[e.Draft=0]="Draft",e[e.Posted=1]="Posted",e[e.Received=2]="Received",e))(D||{});K.Decorators.registerEnumType(D,"CorrespondenceSystem.Modules.Enums.Letter.States","State");var R=class R extends C.ColumnsBase{};o(R,"LetterColumns"),R.columnsKey="LetterDB.Letter",R.Fields=(0,C.fieldsProxy)();var x=R;var H=i(n(),1),j=i(w(),1);var m=class extends j.GridEditorBase{getColumnsKey(){return U.columnsKey}getDialogType(){return N}getLocalTextPrefix(){return G.localTextPrefix}};o(m,"LetterAttachmentEditor"),m=d([H.Decorators.registerEditor("CorrespondenceSystem.LetterAttachmentDB.LetterAttachmentEditor")],m);var l=i(n(),1),k=i(w(),1);var p=class extends k.GridEditorBase{getColumnsKey(){return b.columnsKey}getDialogType(){return q}getLocalTextPrefix(){return h.localTextPrefix}AddSign(){(0,l.serviceCall)({url:(0,l.resolveUrl)("~/Services/SignLettersDB/SignLetters/AddSignLetter"),onSuccess:a=>{var t=this.view.getItems();t.push({LetterId:"",SignTitle:"jojj"}),this.setEntities(t)},method:"post"})}getButtons(){var a=super.getButtons(),t=(0,l.tryFirst)(a,e=>e.cssClass=="add-button");return t.onClick=null,t.onClick=e=>this.AddSign(),a}};o(p,"SignLettersEditor"),p=d([l.Decorators.registerEditor("CorrespondenceSystem.SignLettersDB.SignLettersEditor")],p);var r=i(n(),1);var M=i(n(),1),B=(t=>(t[t.Normal=0]="Normal",t[t.Secret=1]="Secret",t))(B||{});M.Decorators.registerEnumType(B,"CorrespondenceSystem.Modules.Enums.Letter.ConfidentialLevels","ConfidentialLevels");var O=i(n(),1),P=(t=>(t[t.Outgoing=0]="Outgoing",t[t.Incoming=1]="Incoming",t))(P||{});O.Decorators.registerEnumType(P,"CorrespondenceSystem.Modules.Enums.Letter.LetterTypes","LetterTypes");var F=i(n(),1),A=(e=>(e[e.Urgent=0]="Urgent",e[e.Instant=1]="Instant",e[e.Normal=2]="Normal",e))(A||{});F.Decorators.registerEnumType(A,"CorrespondenceSystem.Modules.Enums.Letter.PriorityStates","PriorityState");var L=class L extends r.PrefixedContext{constructor(a){if(super(a),!L.init){L.init=!0;var t=r.RadioButtonEditor,e=r.StringEditor,I=r.EnumEditor,S=r.ServiceLookupEditor,y=r.BooleanEditor,V=r.LookupEditor,W=r.TextAreaEditor,Y=m,Z=p;(0,r.initFormType)(L,["LetterType",t,"Title",e,"LetterIdentifier",e,"LetterIdentifierGen",e,"LetterNo",e,"PriorityState",t,"ConfidentialLevel",t,"State",I,"SenderId",S,"ReceiverId",S,"GrandSubjectId",S,"UseDefaultTemplate",y,"TemplateId",V,"LetterContent",W,"Tag",e,"LetterCarrier",e,"HasAttachment",y,"NeedAnswer",y,"DetailList",Y,"SignLettersDetailList",Z])}}};o(L,"LetterForm"),L.formKey="LetterDB.Letter";var v=L;var J=i(n(),1);var s=class s{};o(s,"LetterRow"),s.idProperty="Id",s.nameProperty="LetterIdentifier",s.localTextPrefix="LetterDB.Letter",s.deletePermission="Administration:General",s.insertPermission="Administration:General",s.readPermission="Administration:General",s.updatePermission="Administration:General",s.Fields=(0,J.fieldsProxy)();var g=s;var Q=i(n(),1),f;(t=>(t.baseUrl="LetterDB/Letter",t.Methods={Create:"LetterDB/Letter/Create",Update:"LetterDB/Letter/Update",Delete:"LetterDB/Letter/Delete",Retrieve:"LetterDB/Letter/Retrieve",List:"LetterDB/Letter/List"},["Create","Update","Delete","Retrieve","List"].forEach(e=>{t[e]=function(I,S,y){return(0,Q.serviceRequest)(t.baseUrl+"/"+e,I,S,y)}})))(f||(f={}));var T=i(n(),1);var E=i(n(),1);var c=class extends E.EntityDialog{constructor(){super(...arguments);this.form=new v(this.idPrefix)}getFormKey(){return v.formKey}getRowDefinition(){return g}getService(){return f.baseUrl}};o(c,"LetterDialog"),c=d([E.Decorators.registerClass("CorrespondenceSystem.LetterDB.LetterDialog")],c);var u=class extends T.EntityGrid{getColumnsKey(){return x.columnsKey}getDialogType(){return c}getRowDefinition(){return g}getService(){return f.baseUrl}constructor(a){super(a)}};o(u,"LetterGrid"),u=d([T.Decorators.registerClass("CorrespondenceSystem.LetterDB.LetterGrid")],u);function _(){(0,X.initFullHeightGridPage)(new u($("#GridDiv")).element)}o(_,"pageInit");export{_ as default};
//# sourceMappingURL=LetterPage.js.map
