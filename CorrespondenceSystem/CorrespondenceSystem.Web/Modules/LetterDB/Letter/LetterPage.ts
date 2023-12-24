import { initFullHeightGridPage } from '@serenity-is/corelib';
import { LetterGrid } from './LetterGrid';

export default function pageInit() {
    initFullHeightGridPage(new LetterGrid($('#GridDiv')).element);
}