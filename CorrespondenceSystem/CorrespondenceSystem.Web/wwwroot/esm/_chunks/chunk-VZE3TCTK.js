import{c as t,f as s,g as S,i as o}from"./chunk-THKE7DQS.js";var p=s(o(),1);var i=class i extends p.ColumnsBase{};t(i,"SignLettersColumns"),i.columnsKey="SignLettersDB.SignLetters",i.Fields=(0,p.fieldsProxy)();var R=i;var f=s(o(),1);var e=class e{};t(e,"SignLettersRow"),e.idProperty="Id",e.nameProperty="CreatorUserName",e.localTextPrefix="SignLettersDB.SignLetters",e.deletePermission="Administration:General",e.insertPermission="Administration:General",e.readPermission="Administration:General",e.updatePermission="Administration:General",e.Fields=(0,f.fieldsProxy)();var d=e;var g=s(o(),1),c;(a=>(a.baseUrl="SignLettersDB/SignLetters",a.Methods={Create:"SignLettersDB/SignLetters/Create",Update:"SignLettersDB/SignLetters/Update",Delete:"SignLettersDB/SignLetters/Delete",Retrieve:"SignLettersDB/SignLetters/Retrieve",List:"SignLettersDB/SignLetters/List",AddSignLetter:"SignLettersDB/SignLetters/AddSignLetter"},["Create","Update","Delete","Retrieve","List","AddSignLetter"].forEach(u=>{a[u]=function(x,D,q){return(0,g.serviceRequest)(a.baseUrl+"/"+u,x,D,q)}})))(c||(c={}));var y=s(o(),1);var l=class l extends y.PrefixedContext{};t(l,"SignLettersForm"),l.formKey="SignLettersDB.SignLetters";var n=l;var m=s(o(),1);var r=class extends m.EntityDialog{constructor(){super(...arguments);this.form=new n(this.idPrefix)}getFormKey(){return n.formKey}getRowDefinition(){return d}getService(){return c.baseUrl}};t(r,"SignLettersDialog"),r=S([m.Decorators.registerClass("CorrespondenceSystem.SignLettersDB.SignLettersDialog")],r);export{R as a,d as b,c,r as d};
//# sourceMappingURL=chunk-VZE3TCTK.js.map
