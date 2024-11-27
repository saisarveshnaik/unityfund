import React from 'react';
import '../styles/Header.css';
import logo from '../images/gaming_panda_logo.png';
import line from '../images/line.png';
import searchicon from '../images/search.svg';

const Header: React.FC = () => {
  return (
    <div className='cont'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand"><img src={logo} className="app-logo" alt="logo" /><img src={line} className="line" alt="line" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link">Explore</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Releases</a>
        </li>
        <div className='input-div'>
        <input className="form-control mr-sm-2 search" type="search" placeholder="Discover New Games" aria-label="Discover New Games"/>
        <img src={searchicon} className="search-icon" alt="search-icon" />
        </div>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        
        <button className="blog-btn" type="submit">Blogs</button>
        <button className="explore-btn" type="submit">Explore More</button>
      </form>
    </div>
  </nav>
  </div>

  );
};

export default Header;