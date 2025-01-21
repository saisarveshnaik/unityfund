// Sidebar Component
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineTrophy } from "react-icons/ai";
import { AiOutlineWallet } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineTransaction } from "react-icons/ai";

const Sidebar: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isUsersOpen, setIsUsersOpen] = useState(false);
  
    const toggleSettingsDropdown = () => setIsSettingsOpen(!isSettingsOpen);
    const toggleUsersDropdown = () => setIsUsersOpen(!isUsersOpen);
  
    return (
      <div className={`text-white sidebar ${isVisible ? 'sidebar-visible' : 'sidebar-hidden'} d-md-block`}>
        <ul className="list-unstyled sidebar-content">
          <Link to='/dashboard' style={{ color: '#ffffff', textDecoration: 'none' }}><li><AiOutlineDashboard />Dashboard</li></Link>
          <Link to='/dashboard/subscription' style={{ color: '#ffffff', textDecoration: 'none' }}><li><AiOutlineMoneyCollect />Subscription</li></Link>
          <Link to='/dashboard/portfolio' style={{ color: '#ffffff', textDecoration: 'none' }}><li><AiOutlinePieChart />Portfolio</li></Link>
          <Link to='/dashboard/leaderboard' style={{ color: '#ffffff', textDecoration: 'none' }}><li><AiOutlineTrophy />Leaderboard</li></Link>
          <Link to='/dashboard/wallet' style={{ color: '#ffffff', textDecoration: 'none' }}><li><AiOutlineWallet />Wallet</li></Link>
          <Link to='/dashboard/withdrawal' style={{ color: '#ffffff', textDecoration: 'none' }}><li><AiOutlineWallet />Withdrawal</li></Link>
          <hr/>
          <li><AiOutlineTeam />View Team</li>
          <li><AiOutlineTransaction />Transactions</li>
          <li onClick={toggleUsersDropdown} className="dropdown-toggle">
            Dropdown Menu
            {isUsersOpen && (
              <ul className="dropdown-menu">
                <li>Example 1</li>
                <li>Example 2</li>
              </ul>
            )}
          </li>
          {/* <li onClick={toggleSettingsDropdown} className="dropdown-toggle">
            Settings
            {isSettingsOpen && (
              <ul className="dropdown-menu">
                <li>Profile Settings</li>
                <li>App Settings</li>
              </ul>
            )}
          </li> */}
        </ul>
         
         {/* Bottom Section */}
      <div className="sidebar-bottom">
        <button className="logout-button">Logout</button>
        <p className="copyright-text">UnityFund version @1.0</p>
      </div>

      </div>
    );
  };
  
  export default Sidebar;
  
  