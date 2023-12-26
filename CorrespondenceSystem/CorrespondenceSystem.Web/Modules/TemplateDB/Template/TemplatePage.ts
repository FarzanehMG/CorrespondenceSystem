import { initFullHeightGridPage } from '@serenity-is/corelib';
import { TemplateGrid } from './TemplateGrid';

export default function pageInit() {
    initFullHeightGridPage(new TemplateGrid($('#GridDiv')).element);
}