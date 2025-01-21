import React, { useEffect, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Subscription from './pages/Subscription';
import Porftolio from './pages/Portfolio';
import Leaderboard from './pages/Leaderboard';
import Wallet from './pages/Wallet';
import Withdrawal from './pages/Withdrawal';


const Dashboard: React.FC = () => {

  return (
    <div className="">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/portfolio" element={<Porftolio />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
        </Routes>
    </div>
  );
};

export default Dashboard;