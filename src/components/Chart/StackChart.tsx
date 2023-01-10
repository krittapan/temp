import React from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const COLORS = ["#9e7f5f", '#c8b78b', '#ab8e6f', '#6f3f21', '#ae8f5a', '#3b291c', '#1b0d00']



const StackChart = ({data}) => {

  const {labels, values} = data
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
            max: 5,
          },
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            // offsetX: 40
          }
        }}
        series={values}
        type="bar"
        width='100%'
        height={300}
      />
    </div>
  )
}

export default StackChart