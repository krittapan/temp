import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const COLORS = [
  "#FBC859",
  "#4ABAD2",
  "#F6AB5F",
  "#5977A1",
  "#52D2F5",
  "#78C5C9",
  "#9E7DEE",
  "#D1D763",
  "#F38981",
];
export const data = {
  labels: [
    "มิติผู้นำองค์กรและการบริหารจัดการในกลุ่ม",
    "มิติโครงสร้างพื้นฐาน",
    "มิติด้านการผลิต",
    "มิติด้านมาตรฐานผลิตภัณฑ์",
    "มิติด้านการตลาดและการจัดจำหน่าย",
    "มิติด้านนวัตกรรม",
    "มิติเอกลักษณ์ของผลิตภัณฑ์",
    "มิติการย้อมสีธรรมชาติ",
    "มิติความเฉพาะของเส้นใยธรรมชาติ",
  ],
  legend: {
    display: false,
  },
  datasets: [
    {
      label: "# of Votes",
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const options: any = {
  legend: {
    display: false,
  },
};

const RadarChart = () => {
  return (
    <>
      <Radar
        className="p-[24px]"
        data={data}
        options={{
          scales: {
            r: {
              pointLabels: {
                backdropColor(ctx) {
                  return COLORS[ctx.index];
                },
                backdropPadding: 4,
                borderRadius: 10,
                color: 'black',
                callback(label, index) {
                  return ` ${index+1} `
                },
              },
              ticks: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
            },
          },
        }}
      />


      <div className="grid grid-cols-2  w-full gap-y-[30px] gap-x-[48px] mt-[120px]">
        {data.labels.map((item, index) => (
          <div key={index} className="flex space-x-[8px]">
              <div 
              className="h-[36px] w-[36px] rounded-[50%]"
              style={{
                background: COLORS[index]
              }}/>
              <div className="text-[30px]">{item}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RadarChart;
