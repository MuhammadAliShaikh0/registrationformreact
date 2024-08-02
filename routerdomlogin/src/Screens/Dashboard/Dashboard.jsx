// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Dashboard.css';

// const Dashboard = () => {

//   return (
//     <div className="dashboard">
//       <h1>Dashboard</h1>
      
    
//     </div>
//   );
// }

// export default Dashboard;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout operations like clearing any stored tokens or user info
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to the Dashboard</h1></header><br /><br />
        <button onClick={handleLogout} className="logout-button">Logout</button>
      
      {/* <main className="dashboard-content"> */}
        {/* <p>This is the dashboard. You can add more components and features here.</p> */}
      {/* </main> */}
    </div>
  );
};

export default Dashboard;
