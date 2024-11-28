import React from 'react';
import '../styles/HeroSection.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const HeroSection: React.FC = () => {
   
  React.useEffect(() => {
    AOS.init({
      duration: 1400, // Animation duration in milliseconds
      offset: 100,   // Trigger offset in pixels
    });
  }, []);

  return (
    
   <div className='banner-outer' data-aos="fade-up">
        <div className='welcome-pill' >
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

export default HeroSection;