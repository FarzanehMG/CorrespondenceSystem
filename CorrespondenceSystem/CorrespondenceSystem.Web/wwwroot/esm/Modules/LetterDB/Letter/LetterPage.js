import{a as J,b as k,d as j}from"../../../_chunks/chunk-5LVMS7OQ.js";import{a as H,b as V,d as Q}from"../../../_chunks/chunk-PM5PR2HO.js";import{a as q,b as U,d as O}from"../../../_chunks/chunk-ABATKAFT.js";import{a as E}from"../../../_chunks/chunk-EAAQUTWP.js";import{a as K,b as F,d as N}from"../../../_chunks/chunk-RXHZZGSX.js";import{c as i,f as s,g as d,i as l}from"../../../_chunks/chunk-THKE7DQS.js";var ne=s(l(),1);var w=s(l(),1);var M=s(l(),1),x=(t=>(t[t.Draft=0]="Draft",t[t.Posted=1]="Posted",t[t.Received=2]="Received",t))(x||{});M.Decorators.registerEnumType(x,"CorrespondenceSystem.Modules.Enums.Letter.States","State");var T=class T extends w.ColumnsBase{};i(T,"LetterColumns"),T.columnsKey="LetterDB.Letter",T.Fields=(0,w.fieldsProxy)();var B=T;var D=s(l(),1),X=s(E(),1);var p=class extends X.GridEditorBase{getColumnsKey(){return H.columnsKey}getDialogType(){return Q}getLocalTextPrefix(){return V.localTextPrefix}validateEntity(o,e){o.Id=(0,D.toId)(o.Id);var t=this.view.getItems().find(a=>a.Id===o.Id);return t&&this.id(t)!==e?((0,D.alertDialog)("This product is already in order details!"),!1):(e!=null||(e=o[this.getIdProperty()]),!0)}};i(p,"TaskDescriptionEditor"),p=d([D.Decorators.registerEditor("CorrespondenceSystem.CounterpartDB.CounterpartEditor")],p);var W=s(l(),1),z=s(E(),1);var c=class extends z.GridEditorBase{getColumnsKey(){return J.columnsKey}getDialogType(){return j}getLocalTextPrefix(){return k.localTextPrefix}};i(c,"LetterAttachmentEditor"),c=d([W.Decorators.registerEditor("CorrespondenceSystem.LetterAttachmentDB.LetterAttachmentEditor")],c);var Y=s(l(),1),Z=s(E(),1);var f=class extends Z.GridEditorBase{getColumnsKey(){return K.columnsKey}getDialogType(){return N}getLocalTextPrefix(){return F.localTextPrefix}};i(f,"RelatedLettersEditor"),f=d([Y.Decorators.registerEditor("CorrespondenceSystem.RelatedLettersDB.RelatedLettersEditor")],f);var S=s(l(),1),_=s(E(),1);var g=class extends _.GridEditorBase{getColumnsKey(){return q.columnsKey}getDialogType(){return O}getLocalTextPrefix(){return U.localTextPrefix}AddSign(){(0,S.serviceCall)({url:(0,S.resolveUrl)("~/Services/SignLettersDB/SignLetters/AddSignLetter"),onSuccess:o=>{var e=this.view.getItems();let t={SignTitle:o.Title,SignId:o.Id,CreatedDate:o.CreatedDate};var a=this.id(t);a==null&&(t[this.getIdProperty()]=this.getNextId()),e.push(t),this.setEntities(e)},method:"post"})}getButtons(){var o=super.getButtons(),e=(0,S.tryFirst)(o,t=>t.cssClass=="add-button");if(e){let t=!0;e.onClick=a=>{t&&(this.AddSign(),t=!1,e.disabled=!0)}}return o}};i(g,"SignLettersEditor"),g=d([S.Decorators.registerEditor("CorrespondenceSystem.SignLettersDB.SignLettersEditor")],g);var n=s(l(),1);var ee=s(l(),1),G=(e=>(e[e.Normal=0]="Normal",e[e.Secret=1]="Secret",e))(G||{});ee.Decorators.registerEnumType(G,"CorrespondenceSystem.Modules.Enums.Letter.ConfidentialLevels","ConfidentialLevels");var te=s(l(),1),b=(e=>(e[e.Outgoing=0]="Outgoing",e[e.Incoming=1]="Incoming",e))(b||{});te.Decorators.registerEnumType(b,"CorrespondenceSystem.Modules.Enums.Letter.LetterTypes","LetterTypes");var re=s(l(),1),A=(t=>(t[t.Urgent=0]="Urgent",t[t.Instant=1]="Instant",t[t.Normal=2]="Normal",t))(A||{});re.Decorators.registerEnumType(A,"CorrespondenceSystem.Modules.Enums.Letter.PriorityStates","PriorityState");var R=class R extends n.PrefixedContext{constructor(o){if(super(o),!R.init){R.init=!0;var e=n.RadioButtonEditor,t=n.StringEditor,a=n.ServiceLookupEditor,C=n.BooleanEditor,P=n.LookupEditor,ae=n.TextAreaEditor,le=n.EnumEditor,de=c,me=g,ue=n.ImageUploadEditor,pe=p,ce=f;(0,n.initFormType)(R,["LetterType",e,"PriorityState",e,"ConfidentialLevel",e,"LetterIdentifier",t,"LetterIdentifierGen",t,"ReceiverId",a,"SenderId",a,"UseDefaultTemplate",C,"TemplateId",P,"LetterNo",t,"Title",t,"LetterContent",ae,"Tag",t,"LetterCarrier",t,"State",le,"GrandSubjectId",a,"HasAttachment",C,"NeedAnswer",C,"DetailList",de,"SignLettersDetailList",me,"LetterFile",ue,"CounterpartDetailList",pe,"RelatedLetterDetailList",ce])}}};i(R,"LetterForm"),R.formKey="LetterDB.Letter";var I=R;var oe=s(l(),1);var m=class m{};i(m,"LetterRow"),m.idProperty="Id",m.isActiveProperty="IsActive",m.nameProperty="LetterIdentifier",m.localTextPrefix="LetterDB.Letter",m.deletePermission="Administration:General",m.insertPermission="Administration:General",m.readPermission="Administration:General",m.updatePermission="Administration:General",m.Fields=(0,oe.fieldsProxy)();var L=m;var ie=s(l(),1),h;(e=>(e.baseUrl="LetterDB/Letter",e.Methods={Create:"LetterDB/Letter/Create",Update:"LetterDB/Letter/Update",Delete:"LetterDB/Letter/Delete",Retrieve:"LetterDB/Letter/Retrieve",List:"LetterDB/Letter/List",SetDefaultRecriverSender:"LetterDB/Letter/SetDefaultRecriverSender",SetDefaultTemplate:"LetterDB/Letter/SetDefaultTemplate",SetDefaultIdentifireGen:"LetterDB/Letter/SetDefaultIdentifireGen"},["Create","Update","Delete","Retrieve","List","SetDefaultRecriverSender","SetDefaultTemplate","SetDefaultIdentifireGen"].forEach(t=>{e[t]=function(a,C,P){return(0,ie.serviceRequest)(e.baseUrl+"/"+t,a,C,P)}})))(h||(h={}));var r=s(l(),1);var v=class extends r.EntityDialog{constructor(){super(...arguments);this.form=new I(this.idPrefix)}getFormKey(){return I.formKey}getRowDefinition(){return L}getService(){return h.baseUrl}executeReport(e,t){if(this.validateForm()){var a=new Object;this.propertyGrid.save(a),(0,r.postToService)({service:"Report/Execute",request:{ReportKey:this.reportKey,DesignId:"Default",ExportType:t,Parameters:a},target:e})}}getToolbarButtons(){var e=super.getToolbarButtons();return e.splice((0,r.indexOf)(e,t=>t.cssClass=="undo-delete-button"),1),e.splice((0,r.indexOf)(e,t=>t.cssClass=="localization-button"),1),e.splice((0,r.indexOf)(e,t=>t.cssClass=="clone-button"),1),e.splice((0,r.indexOf)(e,t=>t.cssClass=="apply-changes-button"),1),e}afterLoadEntity(){this.SetRecriverSender(),this.SetDefaultIdentifireGen(),this.form.LetterType.changeSelect2(e=>{this.form.LetterType.value===0 .toString()&&r.EditorUtils.setValue(this.form.State,0)}),this.form.LetterType.changeSelect2(e=>{this.SetDefaultTemplate()})}validateBeforeSave(){return this.form.HasAttachment.value&&this.form.DetailList.value.length==0?((0,r.notifyError)("Attach file!!!"),!1):!0}SetRecriverSender(){(0,r.serviceCall)({url:(0,r.resolveUrl)("~/Services/LetterDB/Letter/SetDefaultRecriverSender"),onSuccess:e=>{e?this.form.LetterType.changeSelect2(t=>{if(this.form.LetterType.value==1 .toString()&&(r.EditorUtils.setValue(this.form.ReceiverId,e),r.EditorUtils.setReadonly(this.form.ReceiverId.element,!0),r.EditorUtils.setValue(this.form.SenderId,null),r.EditorUtils.setReadonly(this.form.SenderId.element,!1)),this.form.LetterType.value==0 .toString()){var a=this.SetRecriverSender();r.EditorUtils.setValue(this.form.SenderId,e),r.EditorUtils.setReadonly(this.form.SenderId.element,!0),r.EditorUtils.setValue(this.form.ReceiverId,null),r.EditorUtils.setReadonly(this.form.ReceiverId.element,!1)}}):console.error("Invalid response format for SetDefaultRecriverSender")},method:"post"})}SetDefaultTemplate(){(0,r.serviceCall)({url:(0,r.resolveUrl)("~/Services/LetterDB/Letter/SetDefaultTemplate"),onSuccess:e=>{this.form.LetterType.value===0 .toString()?(r.EditorUtils.setValue(this.form.UseDefaultTemplate,!0),r.EditorUtils.setValue(this.form.TemplateId,e),r.EditorUtils.setReadonly(this.form.TemplateId.element,!0)):(r.EditorUtils.setValue(this.form.UseDefaultTemplate,!1),r.EditorUtils.setValue(this.form.TemplateId,null),r.EditorUtils.setReadonly(this.form.TemplateId.element,!1))},method:"post"})}SetDefaultIdentifireGen(){(0,r.serviceCall)({url:(0,r.resolveUrl)("~/Services/LetterDB/Letter/SetDefaultIdentifireGen"),onSuccess:e=>{e?this.form.LetterType.changeSelect2(t=>{if(this.form.LetterType.value==0 .toString()&&(r.EditorUtils.setValue(this.form.LetterIdentifierGen,e.Identifier),r.EditorUtils.setReadonly(this.form.LetterIdentifierGen.element,!0)),this.form.LetterType.value==1 .toString()){var a=this.SetRecriverSender();r.EditorUtils.setValue(this.form.LetterIdentifierGen,null),r.EditorUtils.setReadonly(this.form.LetterIdentifierGen.element,!1)}}):console.error("Invalid response format for SetDefaultRecriverSender")},method:"post"})}};i(v,"LetterDialog"),v=d([r.Decorators.registerClass("CorrespondenceSystem.LetterDB.LetterDialog")],v);var u=s(l(),1);var y=class extends u.EntityGrid{getColumnsKey(){return B.columnsKey}getDialogType(){return v}getRowDefinition(){return L}getService(){return h.baseUrl}constructor(o){super(o)}getColumns(){var o=super.getColumns();let e={name:"Download letter",width:120,format:t=>'<a class="fa fa-download downloaded" style="display: flex; align-items: center; justify-content: center;"></a>',minWidth:120,maxWidth:120,cssClass:"download"};return o.push(e),o}onClick(o,e,t){super.onClick(o,e,t);let a=this.itemAt(e);$(o.target).hasClass("download")&&(o.preventDefault(),this.DownloadWord(a.Id))}DownloadWord(o){(0,u.serviceCall)({url:(0,u.resolveUrl)("~/Services/LetterDB/Letter/DownloadWordLetter"),data:JSON.stringify({Id:o}),contentType:"application/json",onSuccess:e=>e,method:"post"})}getQuickFilters(){let o=super.getQuickFilters(),e=(0,u.tryFirst)(o,t=>t.field==L.Fields.Tag);return e.handler=t=>{t.active&&(t.request.Criteria=u.Criteria.and(t.request.Criteria,[[L.Fields.Tag],"like","%"+t.value+"%"]))},o}};i(y,"LetterGrid"),y=d([u.Decorators.registerClass("CorrespondenceSystem.LetterDB.LetterGrid")],y);function fe(){(0,ne.initFullHeightGridPage)(new y($("#GridDiv")).element)}i(fe,"pageInit");export{fe as default};
//# sourceMappingURL=LetterPage.js.map
