// import React from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
// import Chart from 'react-apexcharts'

// ChartJS.register(ArcElement, Tooltip, Legend);

// export const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//     },
//   ],
// };

// const PieChart = () => {
//   return (
//     <Doughnut
//       data={{...data}}
//       options={{

//         plugins: {

//           legend: {
//             display: false,
//           },
//         },
//       }}
//     />
//   );
// };

// export default PieChart;

'use client'
import React from "react";
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const COLORS = ["#9e7f5f", '#c8b78b', '#ab8e6f', '#6f3f21', '#ae8f5a', '#3b291c', '#1b0d00', "#9e7f5f", '#c8b78b', '#ab8e6f', '#6f3f21', '#ae8f5a', '#3b291c', '#1b0d00']
const PieChart = ({data}) => {  
  const {labels, values, hide} = data
  return (
    <div className="max-w-[60%] w-full">
      <Chart
        options={{
          labels: labels,
          colors: COLORS,
          legend: {
            show: !hide,
            fontSize: '24px'
            
          },
          stroke: {
            show: false
          }
        }}
        series={values}
        type="donut"
        width='100%'
      />
    <div>* ข้อมูลที่แสดงมีที่มาจากการสำรวจกลุ่มวิสาหกิจชุมชนจำนวน 120 กลุ่ม ในปี 2565</div>
    </div>
  );
};

export default PieChart;
