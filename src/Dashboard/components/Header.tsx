import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import logo from './unityfund_logo.png';
import profilePic from './profile_pic.png'; // Ensure you have a profile picture asset

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const openDropdown = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    // Use a small delay so that moving between the profile and dropdown doesn't cause flicker
    closeTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  return (
    <header className="text-white p-3 d-flex align-items-center header-fixed justify-content-between">
      <div className="d-flex align-items-center">
        <button className="btn btn-outline-light toggleBtn" onClick={toggleSidebar}>
          <FaBars size={20} />
        </button>
        <h5 className="m-0 header-title">
          <img src={logo} alt="Logo" className="logo" />Unityfund | Admin
        </h5>
      </div>

      <div className="profile-dropdown-container">
        {/* Profile info with mouse events */}
        <div
          className="profile-info d-flex align-items-center"
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          onClick={() => setDropdownOpen((prev) => !prev)}
          style={{ cursor: 'pointer' }}
        >
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="profile-text">
            <div className="profile-name">John Doe</div>
            <div className="profile-level">Level 5</div>
          </div>
          <FaChevronDown className="dropdown-arrow" />
        </div>
        {dropdownOpen && (
          <div
            className="dropdown-menu show"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
           

           <div className='earningDiv'>
            <h3>Total Earnings:</h3>
            <h4>USD 350K</h4>
           </div>

           <hr/>

            <div className="dropdown-item">
              <span className="title">Referral ID:</span>
              <span className="value">REF123456</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
