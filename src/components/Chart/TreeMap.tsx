import classNames from "classnames";
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


interface ITreeMapProps {
  data: {
    x: string;
    y: number
  }[]
  color: string
}


const TreeMap = ({data, color}: ITreeMapProps) => {
  return (
    <div className={classNames("max-w-[100%] w-full", {
      "saturate-0": color === "สีดำ",
      "hue-rotate-[200deg]": color === "สีเหลือง",
      "hue-rotate-[190deg]": color === "สีน้ำตาล",
      "hue-rotate-[45deg]": color === "สีม่วง",
      "hue-rotate-[180deg]": color === "สีส้ม",
      "hue-rotate-[240deg]": color === "สีเขียว",
      "hue-rotate-[140deg]": color === "สีแดง",
    })}>
      <div>
      {color}

      </div>
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
            data
          }
        ]}
        type="treemap"
        height={350}
      />
    <div>* ข้อมูลที่แสดงมีที่มาจากการสำรวจกลุ่มวิสาหกิจชุมชนจำนวน 120 กลุ่ม ในปี 2565</div>
    </div>
  );
};

export default TreeMap;
