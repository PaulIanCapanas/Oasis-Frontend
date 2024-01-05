import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

// Define an interface for the JSON data structure
interface MonthlyCount {
  month: string;
  count: number;
}

const BarGraph: React.FC = () => {
  const [data, setData] = useState<MonthlyCount[]>([]);

  useEffect(() => {
    // Fetch JSON data
    fetch('/monthly_counts.json')
      .then(response => response.json())
      .then((jsonData: MonthlyCount[]) => setData(jsonData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Render bar graph when data is available
    if (data.length > 0) {
      renderBarGraph();
    }
  }, [data]);

  const renderBarGraph = () => {
    const labels = data.map(item => item.month);
    const values = data.map(item => item.count);

    const ctx = document.getElementById('barGraph') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Monthly Counts',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
    });
  };

  return (
    <div>
      <h1>Monthly Counts Bar Graph</h1>
      <canvas id="barGraph" width="400" height="200"></canvas>
    </div>
  );
};

export default BarGraph;
