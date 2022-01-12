import {
  CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title,
  Tooltip
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({hour, temp, tempFeelLike}) {
const labels = hour;
  const data = {
  labels,
  datasets: [
      {
        label: ' Temp (°C)',
        data: temp,
        borderColor: '#8E5EA2',
        backgroundColor: 'rgba(229,229,229, 0)',
        yAxisID: 'y',
      },
      {
        label: ' Feel like (°C)',
        data:  tempFeelLike,
        borderColor: '#3CBA9F',
        backgroundColor: 'rgba(229,229,229, 0)',
        yAxisID: 'y1',
      },
    ],
  };

const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
 
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: false,
      position: 'left',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

return  <Line options={options} data={data} />;
}
