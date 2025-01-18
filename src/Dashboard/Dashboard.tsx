import React, { useEffect, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

const Dashboard: React.FC = () => {

  return (
    <div className="">
      <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
};

export default Dashboard;