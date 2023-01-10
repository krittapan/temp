import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const series = [14, 23, 21, 17, 15, 10, 12, 17, 21]
const PolarChart = () => {
  return (
    <Chart options={{
      
      chart: {
        type: 'polarArea',
      },
      stroke: {
        show: false
      },
      fill: {
        opacity: 0.8
      },
      yaxis: {
        show: false
      },
      dataLabels: {
        formatter: (val) => 'dfdf'
      },
      xaxis: {
        type:"category",
        categories:['dfdf','dfdf','dfdf'],
        labels: {
          
          formatter: (value) => 'dfdf',
          style: {
            colors: '#000'
          }
        }
      },
      labels: ['df','ok','sd'],
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0
          },
          spokes: {
            strokeWidth: 0
          },
        }
      }
    }} series={series} type="polarArea" />
  )
}

export default PolarChart