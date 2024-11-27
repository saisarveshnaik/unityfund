import React from 'react';
import '../styles/HeroSection.css';

const Header: React.FC = () => {
  return (
    
   <div className='banner-outer'>
        <div className='welcome-pill'>
          <h2>Welcome to Panda Gaming Studios!</h2>
        </div>
        <h1>BUILDING THE FUTURE OF GAMING</h1>
        <p>From casual games to immersive experiences, GamingPanda Studios creates 
        worlds that captivate and inspire.</p>
        <div className='btn-div'>
        <button className='discover-btn'>Discover Games</button>
        <button className='learn-btn'>Learn More</button>
        </div>
   </div>

  );
};

export default Header;