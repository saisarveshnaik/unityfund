import React from 'react';
import '../styles/Vision.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import graph from '../images/graph.svg';
import v1 from '../images/v1.svg';
import v2 from '../images/v2.svg';
import v3 from '../images/v3.svg';
import v4 from '../images/v4.svg';

const Vision: React.FC = () => {

    React.useEffect(() => {
        AOS.init({
          duration: 1400, // Animation duration in milliseconds
          offset: 100,   // Trigger offset in pixels
        });
      }, []);
    
  return (
    
   <div className='vision-outer'>
   <div className='cont vision' id='vision'>
     <h1 data-aos="fade-up">OUR VISION:</h1>
     <h2 data-aos="fade-up">PAVING THE WAY FOR FUTURE OF GAMING</h2>
     <p data-aos="fade-up">At GamingPanda Studios, we are driven by a bold vision to transform the gaming landscape and place India at the forefront of the global gaming industry. Here’s how we plan to achieve it :</p>

     <div className='row'>
        <div className='col-md-6 left'>
            <div className='inner' data-aos="zoom-in">
                <div className='circle'>
                <img src={v1} className="graph-icon" alt="graph-icon" />
                </div>
                <h3>Innovation Beyond Boundaries</h3>
                <p>We aim to redefine gaming experiences by blending creativity with cutting-edge technology. From casual mobile games to immersive AAA titles, we are committed to delivering products that push the boundaries of what gaming can achieve.</p>
            </div>
        </div>
        <div className='col-md-6 right'>
            <div className='inner' data-aos="zoom-in">
            <div className='circle'>
            <img src={v2} className="graph-icon" alt="graph-icon" />
            </div>
            <h3>Empowering India’s Gaming Ecosystem</h3>
            <p>Our mission is to establish India as a gaming powerhouse by nurturing homegrown talent, building world-class games, and fostering a community of passionate players and developers.</p>
            </div>
        </div>
        <div className='col-md-6 left'>
            <div className='inner' data-aos="zoom-in">
                <div className='circle'>
                <img src={v3} className="graph-icon" alt="graph-icon" />
                </div>
                <h3>The Future of Gaming Hardware</h3>
                <p>As part of our vision, we plan to innovate not just in games but also in gaming hardware. From developing consoles tailored for Indian gamers to creating tools that elevate the gaming experience, we are determined to shape the future of interactive entertainment.</p>
            </div>
        </div>
        <div className='col-md-6 right'>
            <div className='inner' data-aos="zoom-in">
            <div className='circle'>
            <img src={v4} className="graph-icon" alt="graph-icon" />
            </div>
            <h3>Building a Global Gaming Legacy</h3>
            <p>With the launch of our flagship product, PlantGame, we are laying the foundation for a legacy of world-class games. This is just the beginning as we strive to create a gaming studio that resonates globally while staying rooted in India’s unique cultural identity.</p>
            </div>
        </div>
     </div> 

   </div>
   </div> 
   
  );
};

export default Vision;