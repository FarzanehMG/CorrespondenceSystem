import { GrandSubjectForm, GrandSubjectRow, GrandSubjectService } from '@/ServerTypes/GrandSubjectDB';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('CorrespondenceSystem.GrandSubjectDB.GrandSubjectDialog')
export class GrandSubjectDialog extends EntityDialog<GrandSubjectRow, any> {
    protected getFormKey() { return GrandSubjectForm.formKey; }
    protected getRowDefinition() { return GrandSubjectRow; }
    protected getService() { return GrandSubjectService.baseUrl; }

    protected form = new GrandSubjectForm(this.idPrefix);
}