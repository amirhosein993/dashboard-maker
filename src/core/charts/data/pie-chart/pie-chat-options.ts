import {EChartsOption} from "echarts";
import {PieChartSeries} from "./pie-chart";
export const series : PieChartSeries = {};
export const PieChatOptions: EChartsOption = {
  backgroundColor: '',
    color: [],
  tooltip: {
  trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
},
  legend: {
    orient: 'vertical',
      left: 'left',
      data: series.legend,
      selected: {},
      textStyle: {
      color: '',
        fontFamily: 'IranSans'
    },
  },
  series: [
    {
      name: series.name,
      type: 'pie',
      radius: series.radius,
      center: ['50%', '50%'],
      data: series.data,
      itemStyle: {
        // emphasis: {
        //   shadowBlur: 10,
        //   shadowOffsetX: 0,
        //   shadowColor: '',
        // },
      },
      label: {
        // normal: {
        //   textStyle: {
        //     color: '',
        //     fontFamily: ''
        //   },
        // },
      },
      labelLine: {
        // normal: {
        //   lineStyle: {
        //     color: '',
        //   },
        // },
      },
    },
  ],
}
