import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS

const Header: React.FC = () => {

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar') as HTMLElement | null;
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-navbar">
    <a className="navbar-brand" href="index.php">
      <img src="/images/logo/unityfund_logo.png" className="navbar-logo" />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Why">WHY UNITYFUND</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Features">FEATURES</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <Link to="/login" style={{ textDecoration: 'none' }}>
        <button className="join-btn mr-2">LOGIN</button>
        </Link>
        <Link to="/register" style={{ textDecoration: 'none' }}>
        <button className="join-btn">REGISTER</button>
        </Link>
      </form>
    </div>
  </nav>
    
  );
};

export default Header;
