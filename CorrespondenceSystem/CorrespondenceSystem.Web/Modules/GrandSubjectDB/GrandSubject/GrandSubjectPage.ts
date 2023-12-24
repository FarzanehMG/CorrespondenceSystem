import { initFullHeightGridPage } from '@serenity-is/corelib';
import { GrandSubjectGrid } from './GrandSubjectGrid';

export default function pageInit() {
    initFullHeightGridPage(new GrandSubjectGrid($('#GridDiv')).element);
}