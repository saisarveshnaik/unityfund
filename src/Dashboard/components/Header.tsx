// Header Component
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css';
import { FaBars } from 'react-icons/fa';
import logo from './unityfund_logo.png';

const Header: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
    return (
      <header className="text-white p-3 d-flex  align-items-center header-fixed">
        <button className="btn btn-outline-light toggleBtn" onClick={toggleSidebar}>
          <FaBars size={20} />
        </button>
        <h5 className="m-0"><img src={logo} />Unityfund | Admin</h5>
      </header>
    );
  };
  
  export default Header;