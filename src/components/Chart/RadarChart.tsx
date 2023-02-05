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

const options: any = {
  legend: {
    display: false,
  },
};

interface IProps {
  chartDatas: number[];
  chartLabels: string[];
}
const RadarChart = ({ chartDatas, chartLabels }: IProps) => {
  const data = {
    labels: chartLabels,
    legend: {
      display: false,
    },
    datasets: [
      {
        label: "# of Votes",
        data: chartDatas,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
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
                color: "black",
                callback(label, index) {
                  return ` ${index + 1} `;
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
          <div key={index} className="flex space-x-[8px] items-center">
            <div
              className="h-[36px] w-[36px] rounded-[50%]"
              style={{
                background: COLORS[index],
              }}
            />
            <div className="text-[26px]">{item}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RadarChart;
