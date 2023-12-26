import { initFullHeightGridPage } from '@serenity-is/corelib';
import { SignLettersGrid } from './SignLettersGrid';

export default function pageInit() {
    initFullHeightGridPage(new SignLettersGrid($('#GridDiv')).element);
}