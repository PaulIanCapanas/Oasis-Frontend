import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

interface DataItem {
  month: string;
  count: number;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarGraph = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [ chartData, setChartData ] = useState({
    labels: [],
    datasets: [
      {
        label: 'Bar Graph Data',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [],
      },
    ]});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<DataItem[]>('http://localhost:3000/user/data');

        console.log(response.data);
        setChartData({   
          labels: response.data.data.map(entry => entry.month) as never[],
          datasets: [
            {
              label: 'Bar Graph Data',
              backgroundColor: 'rgba(75,192,192,0.2)',
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(75,192,192,0.4)',
              hoverBorderColor: 'rgba(75,192,192,1)',
              data: response.data.data.map(entry => entry.count) as never[],
            },
          ]})
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div>
      <h2>Bar Graph</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Bar data={chartData} />
      )}
    </div>
  );
};

export default BarGraph;
