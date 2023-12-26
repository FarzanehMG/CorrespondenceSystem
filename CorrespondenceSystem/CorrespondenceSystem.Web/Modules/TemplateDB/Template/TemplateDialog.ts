import { TemplateForm, TemplateRow, TemplateService } from '@/ServerTypes/TemplateDB';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('CorrespondenceSystem.TemplateDB.TemplateDialog')
export class TemplateDialog extends EntityDialog<TemplateRow, any> {
    protected getFormKey() { return TemplateForm.formKey; }
    protected getRowDefinition() { return TemplateRow; }
    protected getService() { return TemplateService.baseUrl; }

    protected form = new TemplateForm(this.idPrefix);
}