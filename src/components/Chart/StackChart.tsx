import React from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const COLORS = ["#9e7f5f", '#c8b78b', '#ab8e6f', '#6f3f21', '#ae8f5a', '#3b291c', '#1b0d00']


interface IProps {
  data: any
  max?: number
  height?: number
}

const StackChart = ({data, max, height = 300}: IProps) => {

  const {labels, values, } = data
  return (
    <div className="max-w-[100%] w-full">
      <Chart
        options={{
          colors: COLORS,
          chart: {
            toolbar: {
              show: false
            },
            stacked: true,
            stackType:'100%'
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          xaxis: {
            categories: labels,
          },
          yaxis: {
            max,
          },
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            // offsetX: 40
		fontFamily: 'DB Ozone X',
fontSize: '24px',
          }
        }}
        series={values}
        type="bar"
        width='100%'
        height={height}
      />
      <div>* ข้อมูลที่แสดงมีที่มาจากการสำรวจกลุ่มวิสาหกิจชุมชนจำนวน 120 กลุ่ม ในปี 2565</div>
    </div>
  )
}

export default StackChart
