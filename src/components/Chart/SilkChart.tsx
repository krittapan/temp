"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { format } from "path";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const COLORS = [
  "#9e7f5f",
  "#c8b78b",
  "#ab8e6f",
  "#6f3f21",
  "#ae8f5a",
  "#3b291c",
  "#1b0d00",
];
const SilkChart = ({ data }) => {
  const { labels, values, specs } = data;

  // const [hide, setHide] = useState(false);
  return (
    <div className="max-w-[60%] w-full">
      <Chart
        options={{
          labels: labels,
          colors: COLORS,
          legend: {
            show: true,
            fontSize: "24px",
          },
          stroke: {
            show: false,
          },
          tooltip: {
            y: {
              formatter(val, opt) {
                const result = specs[opt.dataPointIndex];

                const displayed = result
                  .map(
                    (item) =>
                      `<div>${item.name || "ไม่พบในฐานข้อมูล"} ${item.value || ""} ${
                        item.unit || ""
                      }</div>`
                  )
                  .join("");

                return `    <div>
                ${displayed}
            </div>`;
              },
            },
          },
        }}
        series={values}
        type="donut"
        width="100%"
        events={{
          click: (e) => console.log(e),
        }}
      />
    </div>
  );
};

export default SilkChart;
