import React from 'react';
import { Link } from 'react-router-dom';
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
                  <a href='#next' onClick={(e) => {
    e.preventDefault();
    document.getElementById('next')?.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
  }}><button className='discover-btn'>Discover Games</button></a>
                  <Link to="/blogs"><button className='learn-btn'>Learn More</button></Link>
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