import{a as d,b as a,c as e,d as i}from"../../../_chunks/chunk-YJXLW3ZO.js";import{c as o,e as s,f as n,h as m}from"../../../_chunks/chunk-CFICWFWM.js";var u=s(m(),1);var p=s(m(),1);var r=class extends p.EntityDialog{constructor(){super(...arguments);this.form=new a(this.idPrefix)}getFormKey(){return a.formKey}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getNameProperty(){return e.nameProperty}getService(){return i.baseUrl}};o(r,"LanguageDialog"),r=n([p.Decorators.registerClass("CorrespondenceSystem.Administration.LanguageDialog")],r);var c=s(m(),1);var t=class extends c.EntityGrid{useAsync(){return!0}getColumnsKey(){return d.columnsKey}getDialogType(){return r}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getService(){return i.baseUrl}afterInit(){super.afterInit()}getDefaultSortBy(){return[e.Fields.LanguageName]}};o(t,"LanguageGrid"),t=n([c.Decorators.registerClass("CorrespondenceSystem.Administration.LanguageGrid")],t);$(function(){(0,u.initFullHeightGridPage)(new t($("#GridDiv")).element)});
//# sourceMappingURL=LanguagePage.js.map