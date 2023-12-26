import { initFullHeightGridPage } from '@serenity-is/corelib';
import { LetterHistoryGrid } from './LetterHistoryGrid';

export default function pageInit() {
    initFullHeightGridPage(new LetterHistoryGrid($('#GridDiv')).element);
}