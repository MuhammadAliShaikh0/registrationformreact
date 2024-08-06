import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to the Dashboard</h1></header><br /><br />
        <button onClick={handleLogout} className="logout-button">Logout</button>
      
    
    </div>
  );
};

export default Dashboard;
