import React from 'react';
import '../styles/Inside.css';
import 'aos/dist/aos.css';
import AOS from 'aos';


const Inside: React.FC = () => {

    React.useEffect(() => {
        AOS.init({
          duration: 1400, // Animation duration in milliseconds
          offset: 100,   // Trigger offset in pixels
        });
      }, []);


  return (
    
    <div className='inside-outer'>
   <div className='cont inside'>
         
   <h1 data-aos="fade-up">INSIDE THE WORLD OF GAMING</h1>
   <p data-aos="fade-up">GamingPanda Studios is a top-notch game development studio offering consistently superior services to clients.</p>

    <div className='row'>
        <div className='col-md-7 left'>
         <div className='big' data-aos="zoom-in">
         <img src="/images/inside_1.jpg" className='big-bg' alt="big-bg" />
         <h2>How PlantGame is Changing Strategy Games Forever</h2>
         <p>GamingPanda Studios is a top-notch game development studio offering consistently superior services to clients. </p>
         <img src="/images/inside_3.jpg" className='big-small' alt="game-img" />
         </div>
        </div>
        <div className='col-md-5 right'>
          <div className='small' data-aos="zoom-in">
          <img src="/images/inside_2.jpg" className='small-bg' alt="small-bg" />
          <h3>The Rise of Casual Gaming in India : Opportunities and Challenges</h3>
          <img src="/images/inside_3.jpg" className='small-small' alt="game-img" />
          </div>
          <div className='small' data-aos="zoom-in">
          <img src="/images/inside_2.jpg" className='small-bg' alt="small-bg" />
          <h3>The Rise of Casual Gaming in India : Opportunities and Challenges</h3>
          <img src="/images/inside_3.jpg" className='small-small' alt="game-img" />
          </div>
        </div>
    </div>

   </div>
   </div>

  );
};

export default Inside;