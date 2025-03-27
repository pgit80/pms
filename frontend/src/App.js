import './index.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './components/loginPages/AdminLogin';
import CSCLogin from './components/loginPages/CSCLogin';
import AssigneeLogin from './components/loginPages/AssigneeLogin';
import CscDashboard from './components/dashboards/CscDashboard';
import AdminDashboard from './components/dashboards/AdminDashboard';
import AssigneeDashboard from './components/dashboards/AssigneeDashboard';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Navigate to="/admin-login" />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/csc-login" element={<CSCLogin />} />
          <Route path="/assignee-login" element={<AssigneeLogin />} />
          <Route path='/csc-dashboard' element={<CscDashboard/>}/>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
          <Route path="/assignee-dashboard" element={<AssigneeDashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
