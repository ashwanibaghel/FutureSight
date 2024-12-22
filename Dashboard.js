import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Dashboard.css';
import { auth } from '../firebase';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  const [user, setUser] = useState(null);
  const [streak, setStreak] = useState(10);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  // Data for the bar chart
  const progressData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Career Progress (%)',
        data: [20, 40, 60, 80, 100],
        backgroundColor: ['#4caf50', '#2196f3', '#ff5722', '#ffc107', '#e91e63'],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Career Progress Chart',
      },
    },
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome, {user ? user.displayName || user.email : 'Guest'}!</h1>
        <p>Your Personalized Career Dashboard</p>
      </header>
      <div className="streak-container">
        <h2>Streak: {streak} Days</h2>
        <progress max="100" value={streak}></progress>
      </div>
      <div className="chart-container">
        <Bar data={progressData} options={options} />
      </div>
      <div className="dashboard-links">
        <Link to="/profile" className="dashboard-link">
          Profile
        </Link>
        <Link to="/predict" className="dashboard-link">
          AI Career Prediction
        </Link>
        <Link to="/achievements" className="dashboard-link">
          Achievements
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
