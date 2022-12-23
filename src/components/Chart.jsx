import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from "@faker-js/faker"
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      
      position: 'top' ,
    },
    
  },
  
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
        
      fill: true,
      label: '',
      
      data: labels.map(() => faker.datatype.number({ min: 100, max: 500 })),
      borderColor: 'rgb(109,188,219, 0.9)',
      borderWidth: 1,
      backgroundColor: 'rgb(109,188,219, 0.2)',

    },
  ],
};
const Chart =() => {
  return <Line className='p-8' options={options} data={data} />;
}
export default Chart
