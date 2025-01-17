import React from 'react';
import '../styles/Features.css';
import { useNavigate, Link } from 'react-router-dom';


const Features: React.FC = () => {
  return (
    
    <section id="Features">
 
    <img src="/images/left-vector.png" className="bg-1" />
    <img src="/images/right-vector.png" className="bg-2" />
    
       <div className="cont">
          <div className="row">
             <div className="col-md-6 left">
              
             <img src="/images/feature-glaxy.png" className="img-1" />
             <img src="/images/intro_1-1.png" className="img-2" />
             <img src="/images/vector.png" className="img-3" />
    
    
             </div>
             <div className="col-md-6 right">
                <h2>FEATURES</h2>
                <h1>UnityFund Spreading Opportunity Everywhere</h1>
                <p>At UnityFund, we’ve empowered countless users to achieve success through blockchain-powered crowdfunding. From seamless transactions and transparent referrals to financial independence and innovative earning opportunities, our platform creates a shared ecosystem of growth and trust.</p>
                 
                <div className="row">
                   <div className="col-md-4 col-6">
                      <h3>100</h3>
                      <h4>UnityFund Users</h4>
                   </div>
                   <div className="col-md-4 col-6">
                   <h3>15%</h3>
                   <h4>Minimum ROI</h4>
                   </div>
                </div>
    
             </div>
          </div>
       </div>
    </section>


  );
};

export default Features;