import { SignForm, SignRow, SignService } from '@/ServerTypes/SignDB';
import { Decorators, EntityDialog, serviceCall, resolveUrl,EditorUtils } from '@serenity-is/corelib';

@Decorators.registerClass('CorrespondenceSystem.SignDB.SignDialog')
export class SignDialog extends EntityDialog<SignRow, any> {
    protected getFormKey() { return SignForm.formKey; }
    protected getRowDefinition() { return SignRow; }
    protected getService() { return SignService.baseUrl; }

    protected form = new SignForm(this.idPrefix);



}
