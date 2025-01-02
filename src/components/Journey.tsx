import React from 'react';
import '../styles/Journey.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import journey from '../images/follow-panda.png';
import youtube from '../images/youtube.svg';


const Journey: React.FC = () => {

    React.useEffect(() => {
        AOS.init({
          duration: 1400, // Animation duration in milliseconds
          offset: 100,   // Trigger offset in pixels
        });
      }, []);

      const handleButtonClick = () => {
        window.open("https://www.youtube.com/watch?v=37SxmUCeB5w&feature=youtu.be", "_blank");
    };

  return (
    
   <div className='cont journey'>
         
      <div className='row'>
        <div className='col-md-5'>
        <img src={journey} className="journey-img" alt="panda-img" data-aos="zoom-in" />
        </div>
        <div className='col-md-7'>
            <h1 data-aos="fade-up">FOLLOW OUR JOURNEY</h1>
            <div className='text-div' data-aos="fade-up">
                <p>Get an exclusive behind-the-scenes look at how GamingPanda Studios is shaping the future of gaming. Subscribe to our channel and join us as we work toward becoming India’s biggest gaming studio.</p>
            </div>
            <button onClick={handleButtonClick} className='watch-btn' data-aos="fade-up"><img src={youtube} className="youtube" alt="youtube-icon" /> Watch Now</button>
        </div>
      </div>

   </div>

  );
};

export default Journey;