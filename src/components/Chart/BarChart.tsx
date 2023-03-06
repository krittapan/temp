import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = ({data}) => {

  const {chartDatas, chartLabels} = data
  return (
    <div className="w-full">
      <Chart
        options={{
          plotOptions: {
            bar: {
              barHeight: "100%",
              distributed: true,
            },
          },
          legend: {
            show: true,
	    fontFamily: 'DB Ozone X',
	    fontSize: "24px",
          },  
          colors: [
            "#3B877B",
            "#F09536",
            "#EE7950",
            "#F2C24F",
            "#107C1C",
            "#C2CA51",
            "#c27b9f",
            "#1255cc",
            "#674ea7",
          ],
          yaxis: {
            labels: {
              show: true,
              formatter: (val) => {
                if (val === 0) return "";
                if (val === Infinity) return "";
                return `${parseInt(val.toString() || "0")}`;
              },
            },
          },
          xaxis: {
            categories: chartLabels,
          },
          tooltip: {
            x: {
              show: true,
            },
            y: {
              title: {
                formatter() {
                  return "";
                },
              },
            },
          },
        }}
        series={[{ data: chartDatas }]}
        type="bar"
        width="100%"
        height={480}
      />
    <div>* ข้อมูลที่แสดงมีที่มาจากการสำรวจกลุ่มวิสาหกิจชุมชนจำนวน 120 กลุ่ม ในปี 2565</div>
    </div>
  );
};

export default BarChart;
