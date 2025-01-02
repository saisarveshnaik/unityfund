import React from 'react';
import '../styles/Next.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import next1 from '../images/next_1.jpg';
import next2 from '../images/next_2.jpg';


const Next: React.FC = () => {
  
  React.useEffect(() => {
    AOS.init({
      duration: 1400, // Animation duration in milliseconds
      offset: 100,   // Trigger offset in pixels
    });
  }, []);

  return (
    
    <div className='next-outer'>
   <div className='cont next' id='next'>
     <h1 data-aos="fade-up">WHAT'S NEXT AT GAMING PANDA</h1>
     <p data-aos="fade-up">We’re excited to announce the development of PlantGame, our first major launch as a product-based company. Dive into a lush, interactive world where strategy meets adventure.</p>
      
      <div className='row'>
        <div className='col-md-6 left'>
            <div className='inner' data-aos="fade-up">
            <img src={next1} className="next-img" alt="game-img" />  
            <h2>Plant Game</h2>
            <p>Our expertise spans a variety of gaming genres and platforms. From hyper-casual mobile games to immersive virtual worlds, we take pride in delivering experiences that entertain and engage millions.</p>
            </div>
        </div>
        <div className='col-md-6 right'>
        <div className='inner' data-aos="fade-up">
            <img src={next2} className="next-img" alt="game-img" />  
            <h2>Ori : Blind Forest</h2>
            <p>Our expertise spans a variety of gaming genres and platforms. From hyper-casual mobile games to immersive virtual worlds, we take pride in delivering experiences that entertain and engage millions.</p>
            </div>
        </div>
      </div>

   </div>
   </div>

  );
};

export default Next;