import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);


const options: any ={
    responsive: true,
    datalabels: {
      formatter: function(value, context) {
        return context.chart.data.labels[context.dataIndex];
      },
      anchor: 'start',
      align: 'end',
      offset: 0 // Gets updated
    },
    plugins: {
      legend: {
        display: false
      },
      
    },
    cutoutPercentage: 20,

    layout: {
      padding: 30,
    },
    scale: {
      scaleLabel: {
        display: true
      },
      ticks: {
        max: 450,
        maxTicksLimit: 1,
        display: false,
      },
      angleLines: {
        display: true
      },
      pointLabels: {
        display: false
      }
    },
  
  }

  interface IProps {
    chartLabels: string[];
    chartDatas: number[];
  }
const PolarChartV2 = ({chartLabels, chartDatas }: IProps) => {
  console.log(chartLabels, chartDatas)
  return (
    <PolarArea
      data={{
        labels: chartLabels,
        datasets: [
          {
            label: "# of Votes",
            data: chartDatas,
            backgroundColor: [
              "#0D0D0D",
              "#794D3A",
              "#164F81",
              "#BF2AFE",
              "#9D4007",
              "#425535",
              "#D09E02",
              "#EF0B0B",
            ],
            borderWidth: 1,
          },
        ],
      }}

      options={options}
    />
  );
};

export default PolarChartV2;



// options={{
//   scales: {
    
//   },
//   plugins: {
//     legend: {
//       display: false
//     },
    
//   }
  
// }}