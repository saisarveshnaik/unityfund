import React from 'react';
import '../styles/Banner.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Banner: React.FC = () => {
   
  React.useEffect(() => {
    AOS.init({
      duration: 1400, // Animation duration in milliseconds
      offset: 100,   // Trigger offset in pixels
    });
  }, []);

  return (
    
    <section id="Main" data-aos="fade-up">
    <img src="/images/feature-glaxy.png" className="bg-1" />
    <img src="/images/left-shape.png" className="bg-2" />
    <img src="/images/vector.png" className="bg-3" />
    <div className="cont">
    <h2>WELCOME TO</h2>
    <h1>Unity Fund</h1>
    
    <div className="row">
       <div className="col-md-6 violet-div">
           <h3>Technology Meets Financial Freedom</h3>
       </div>
       <div className="col-md-6 right-div">
           <p>The Future of Crowdfunding Meets the Power of Crypto.</p>
           <button className="started-btn">Get Started Today</button>
       </div>
    </div>
    
    </div>
    </section>

   

  );
};

export default Banner;