import { initFullHeightGridPage } from '@serenity-is/corelib';
import { CounterpartGrid } from './CounterpartGrid';

export default function pageInit() {
    initFullHeightGridPage(new CounterpartGrid($('#GridDiv')).element);
}