import { BarCharData } from "./bar-char-data";

export class BarChartSeries {
    name ?: string;
    legend ?: string[];
    barCharData ?: BarCharData[];
    dataZoom ?: any[] = [];
}

