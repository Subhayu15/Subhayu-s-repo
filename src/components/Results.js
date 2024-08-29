import React from 'react';
import './Results.css';
import { Bar } from 'react-chartjs-2';

const Results = () => {
  // Sample data for the bar chart (replace with actual data)
  const data = {
    labels: ['Accuracy', 'Precision', 'Recall', 'F1 Score'],
    datasets: [
      {
        label: 'Model Performance',
        data: [0.95, 0.90, 0.85, 0.87], // Replace with actual results
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ]
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 1
      }
    }
  };

  return (
    <section id="results" className="results-section">
      <h2>Results</h2>
      <p>Below are the performance metrics for the machine learning model:</p>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
      <div className="results-details">
        <h3>Accuracy</h3>
        <p>The model achieved an accuracy of 95%, indicating that it correctly predicted 95% of the test cases.</p>
        <h3>Precision</h3>
        <p>The precision of the model is 90%, showing that out of all positive predictions, 90% were actually correct.</p>
        <h3>Recall</h3>
        <p>The recall rate is 85%, meaning the model successfully identified 85% of all positive cases.</p>
        <h3>F1 Score</h3>
        <p>The F1 Score is 87%, providing a balance between precision and recall.</p>
      </div>
    </section>
  );
};

export default Results;

