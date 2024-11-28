import React from 'react';
import '../styles/Legacy.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import legacy1 from '../images/legacy_1.jpg';
import legacy2 from '../images/legacy_2.jpg';
import legacy3 from '../images/legacy_3.jpg';
import legacy4 from '../images/legacy_4.jpg';

const Legacy: React.FC = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 1400, // Animation duration in milliseconds
      offset: 100,   // Trigger offset in pixels
    });
  }, []);

  return (
    
   <div className='cont legacy'>
     <h1 data-aos="fade-up">OUR GAMING LEGACY</h1>
     <p data-aos="fade-up">Our expertise spans a variety of gaming genres and platforms. From hyper-casual mobile games to immersive virtual worlds, we take pride in delivering experiences that entertain and engage millions.</p>
      
      <div className='row'>
        <div className='col-md-3' data-aos="zoom-in">
        <img src={legacy1} className="legacy-img" alt="legacy-img" />
            <h2>Shera Surfer</h2>
        </div>
        <div className='col-md-3' data-aos="zoom-in">
        <img src={legacy2} className="legacy-img" alt="legacy-img" />
            <h2>Ludo Pay</h2>
        </div>
        <div className='col-md-3' data-aos="zoom-in">
        <img src={legacy3} className="legacy-img" alt="legacy-img" />
            <h2>Casino Metaverse</h2>
        </div>
        <div className='col-md-3' data-aos="zoom-in">
        <img src={legacy4} className="legacy-img" alt="legacy-img" />
            <h2>Virtual Real Estate</h2>
        </div>
      </div>

   </div>

  );
};

export default Legacy;