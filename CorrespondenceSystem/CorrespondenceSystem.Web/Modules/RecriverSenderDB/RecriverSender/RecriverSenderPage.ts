import { initFullHeightGridPage } from '@serenity-is/corelib';
import { RecriverSenderGrid } from './RecriverSenderGrid';

export default function pageInit() {
    initFullHeightGridPage(new RecriverSenderGrid($('#GridDiv')).element);
}