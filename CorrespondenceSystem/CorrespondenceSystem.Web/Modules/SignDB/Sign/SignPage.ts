import { initFullHeightGridPage } from '@serenity-is/corelib';
import { SignGrid } from './SignGrid';

export default function pageInit() {
    initFullHeightGridPage(new SignGrid($('#GridDiv')).element);
}