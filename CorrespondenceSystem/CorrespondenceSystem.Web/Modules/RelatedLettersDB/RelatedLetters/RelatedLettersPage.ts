import { initFullHeightGridPage } from '@serenity-is/corelib';
import { RelatedLettersGrid } from './RelatedLettersGrid';

export default function pageInit() {
    initFullHeightGridPage(new RelatedLettersGrid($('#GridDiv')).element);
}