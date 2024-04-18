import {Component, Input} from '@angular/core';
import {NgxEchartsDirective} from "ngx-echarts";
import {EChartsOption} from "echarts";

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [
    NgxEchartsDirective
  ],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent {
  @Input() options: EChartsOption = {};
}
