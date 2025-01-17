import React from 'react';
import '../styles/Part.css';
import { useNavigate, Link } from 'react-router-dom';


const Part: React.FC = () => {
  return (
    
    <section id="Part">
    <div className="cont">
       <div className="row">
          <div className="col-md-6 left">
             <h1>Be part of the future</h1>
             <p>We’ve worked with over 400 companies to build blockchain solutions for their business.</p>
             <button className="started-btn">Get Started</button>
          </div>
          <div className="col-md-6 right">
             <img src="/images/cta.png" className="coin-img" />
          </div>
       </div>
    </div>
 </section>


  );
};

export default Part;