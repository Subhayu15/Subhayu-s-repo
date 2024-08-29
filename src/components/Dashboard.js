import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import LineChart from './LineChart'; // Import the LineChart component
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Dashboard.css'; // Assuming you have this CSS file for styling

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // State to hold dynamic data
  const [barData, setBarData] = useState({
    labels: [],
    datasets: [{
      label: '# of Votes',
      data: [],
      backgroundColor: [],
      borderColor: [],
      borderWidth: 1,
    }],
  });

  const [lineData, setLineData] = useState({
    labels: [],
    values: [],
  });

  // Simulate fetching data
  useEffect(() => {
    const fetchData = async () => {
      // Simulating bar chart data fetch
      const barLabels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
      const barDataValues = [12, 19, 3, 5, 2, 3];
      const backgroundColors = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ];
      const borderColors = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ];

      // Simulating line chart data fetch
      const lineLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
      const lineValues = [200, 250, 300, 350, 400, 450];

      // Update state with fetched data
      setBarData({
        labels: barLabels,
        datasets: [{
          label: '# of Votes',
          data: barDataValues,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        }],
      });

      setLineData({
        labels: lineLabels,
        values: lineValues,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="chart-container">
        <h3>Bar Chart</h3>
        <Bar
          data={barData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              tooltip: {
                callbacks: {
                  label: (context) => `${context.dataset.label}: ${context.raw}`,
                },
              },
            },
            scales: {
              x: {
                beginAtZero: true,
              },
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
      <div className="chart-container">
        <h3>Line Chart - Water Usage Over Time</h3>
        <LineChart data={lineData} />
      </div>
    </div>
  );
};

export default Dashboard;

