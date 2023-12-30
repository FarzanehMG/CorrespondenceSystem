import { SignLettersForm, SignLettersRow, SignLettersService } from '@/ServerTypes/SignLettersDB';
import { Decorators, EntityDialog, text, serviceCall, resolveUrl } from '@serenity-is/corelib';
import { LetterDialog } from '../../LetterDB/Letter/LetterDialog';

@Decorators.registerClass('CorrespondenceSystem.SignLettersDB.SignLettersDialog')
export class SignLettersDialog extends EntityDialog<SignLettersRow, any> {
    protected getFormKey() { return SignLettersForm.formKey; }
    protected getRowDefinition() { return SignLettersRow; }
    protected getService() { return SignLettersService.baseUrl; }

    protected form = new SignLettersForm(this.idPrefix);





}