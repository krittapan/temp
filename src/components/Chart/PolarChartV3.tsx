import React from 'react'
import {

  CChartPolarArea,
} from '@coreui/react-chartjs'
const PolarChartV3 = () => {
  return (
    <CChartPolarArea data={undefined}  options={{
      responsive: true,
      // plugins: {
      //   datalabels: {
      //     formatter: function(value, context) {
      //       return context.chart.data.labels[context.dataIndex];
      //     },
      //     anchor: 'start',
      //     align: 'end',
      //     offset: 0 // Gets updated
      //   },
      // },
      // cutoutPercentage: 20,
      // legend: {
      //   display: false
      // },
      layout: {
        padding: 30,
      },
      // scale: {
      //   scaleLabel: {
      //     display: true
      //   },
      //   ticks: {
      //     display: false,
      //   },
      //   angleLines: {
      //     display: true
      //   },
      //   pointLabels: {
      //     display: false
      //   }
      // },
    }}/>
  )
}

export default PolarChartV3