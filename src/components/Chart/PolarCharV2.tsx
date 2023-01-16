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
const PolarChartV2 = () => {
  return (
    <PolarArea
      data={{
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(255, 159, 64, 0.5)",
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