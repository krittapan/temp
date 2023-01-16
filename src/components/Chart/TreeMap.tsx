import dynamic from "next/dynamic";
import React from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const COLORS = [
  "#9e7f5f",
  "#c8b78b",
  "#ab8e6f",
  "#6f3f21",
  "#ae8f5a",
  "#3b291c",
  "#1b0d00",
];

const TreeMap = () => {
  return (
    <div className="max-w-[100%] w-full">
      <Chart
        options={{
          legend: {
            show: false
          },
          chart: {
            height: 600,
            type: 'treemap'
          },
        }}
        series={[
          {
            data: [
              {
                x: 'คราม',
                y: 500
              },
              {
                x: 'ห้อม',
                y: 149
              },
              {
                x: 'พืช 1',
                y: 184
              },
              {
                x: 'พืช 2',
                y: 55
              },
              {
                x: 'พืช 3',
                y: 84
              },
            ]
          }
        ]}
        type="treemap"
        height={350}
      />
    </div>
  );
};

export default TreeMap;
