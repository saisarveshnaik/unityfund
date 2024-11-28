import React from 'react';
import '../styles/Shaping.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import shaping from '../images/shaping.png';


const Shaping: React.FC = () => {

    React.useEffect(() => {
        AOS.init({
          duration: 1400, // Animation duration in milliseconds
          offset: 100,   // Trigger offset in pixels
        });
      }, []);

  return (
    
   <div className='cont shaping'>
     <h1 data-aos="fade-up">OUR VISION:</h1>
     <h2 data-aos="fade-up">SHAPING THE FUTURE OF GAMING</h2>

     <div className='row'>
        <div className='col-md-8'>
            <div className='text-div' data-aos="fade-left">
                <p>GamingPanda Studios is on a journey to become India’s leading gaming powerhouse. With a strong foundation of creating innovative games and experiences, we aim to set new standards in the gaming industry.</p>
            </div>
            <div className='text-div' data-aos="fade-left">
                <p>GamingPanda Studios is on a journey to become India’s leading gaming powerhouse. With a strong foundation of creating innovative games and experiences, we aim to set new standards in the gaming industry.</p>
            </div>
            
            <button className='follow-btn' data-aos="fade-up">Follow PlantGame’s Development</button>
            <button className='early-btn' data-aos="fade-up">Get Early Access</button>

        </div>
        <div className='col-md-4'>
        <img src={shaping} className="shaping-img" alt="dino-img" data-aos="zoom-in" />
        </div>
     </div>

   </div>

  );
};

export default Shaping;