import { initFullHeightGridPage } from '@serenity-is/corelib';
import { LetterAttachmentGrid } from './LetterAttachmentGrid';

export default function pageInit() {
    initFullHeightGridPage(new LetterAttachmentGrid($('#GridDiv')).element);
}