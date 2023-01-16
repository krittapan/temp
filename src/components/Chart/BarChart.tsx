import React from 'react'
import dynamic from 'next/dynamic'


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });



const barOptions: ApexCharts.ApexOptions = {
  plotOptions: {
    bar: {
      barHeight: '100%',
      distributed: true,
    },
  },
  legend: {
    show: false,
  },
  colors: ['#3B877B', '#F09536', '#EE7950', '#F2C24F', '#107C1C', '#C2CA51', '#c27b9f', '#1255cc', '#674ea7'],
  yaxis: {
    labels: {
      show: true,
      formatter: (val) => {
        if (val === 0) return ''
        if (val === Infinity) return ''
        return `${parseInt(val.toString() || '0')}`
      },
    },
  },
  xaxis: {
    categories: ['ใต้', 'ตะวันออก', 'กลาง', 'เหนือ', 'ตะวันออกเฉียงเหนือ', 'ตะวันตก'],
  },
  tooltip: {
    x: {
      show: true,
    },
    y: {
      title: {
        formatter() {
          return ''
        },
      },
    },
  },
}

const BarChart = () => {
  return (
    <div className="w-full">
      <Chart options={barOptions} series={[{data: [55 ,20, 40, 40,50,60]}]} type="bar" width="100%" height={480} />
    </div>
  )
}

export default BarChart