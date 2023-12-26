import { RelatedLettersForm, RelatedLettersRow, RelatedLettersService } from '@/ServerTypes/RelatedLettersDB';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('CorrespondenceSystem.RelatedLettersDB.RelatedLettersDialog')
export class RelatedLettersDialog extends EntityDialog<RelatedLettersRow, any> {
    protected getFormKey() { return RelatedLettersForm.formKey; }
    protected getRowDefinition() { return RelatedLettersRow; }
    protected getService() { return RelatedLettersService.baseUrl; }

    protected form = new RelatedLettersForm(this.idPrefix);
}