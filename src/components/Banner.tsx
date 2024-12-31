import React from 'react';
import '../styles/Banner.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import viking from '../images/viking.png';

const Banner: React.FC = () => {
   
  React.useEffect(() => {
    AOS.init({
      duration: 1400, // Animation duration in milliseconds
      offset: 100,   // Trigger offset in pixels
    });
  }, []);

  return (
    
   <div className='ban-outer' data-aos="fade-up">
        <div className='cont ban'>
            <div className='row'>
                <div className='col-md-8'>
                <h1>BUILDING THE FUTURE OF GAMING</h1>
                 <p>From casual games to immersive experiences, GamingPanda Studios creates 
                  worlds that captivate and inspire.</p>
                  <button className='discover-btn'>Discover Games</button>
                  <a href='#next'><button className='learn-btn'>Learn More</button></a>
                </div>
                <div className='col-md-4'>
                <img src={viking} className="viking" alt="viking" />
                </div>
            </div>
        </div>
   </div>

  );
};

export default Banner;