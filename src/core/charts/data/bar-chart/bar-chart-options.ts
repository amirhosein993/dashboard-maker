import {BarChartSeries} from "./bar-chart";

export const series : BarChartSeries = {};
export const BarChartOptions = {
  backgroundColor: '',
  color: [],
  legend : {
    left: 'left',
    data : series.legend ,
    textStyle: {
      color: '',
      fontFamily : 'sahel'
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    containLabel: true,
  },
  dataZoom: series.dataZoom,
  xAxis: [
    {
      type: 'category',
      data: [''],
      nameRotate : 20,
      axisTick: {
        alignWithLabel: true,
      },
      axisLine: {
        lineStyle: {
          color: '',
        },
      },
      axisLabel: {
        textStyle: {
          color: '',
          fontStyle : 'bold' ,
          fontFamily : 'sahel'
        },
      },
    },
  ],
  yAxis: [
    {
      type: 'value',

      axisLine: {
        lineStyle: {
          color: '',
        },
      },
      splitLine: {
        lineStyle: {
          color: '',
        },
      },
      axisLabel: {
        textStyle: {
          color: '',
        },
      },
    },
  ],
  series: series.barCharData
  // {
  //   name: this.series.name,
  //   type: 'bar',
  //   barWidth: '60%',
  //   data: this.series.data,
  // },
}
