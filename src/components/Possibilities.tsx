import React from 'react';
import '../styles/Possibilities.css';
import { useNavigate, Link } from 'react-router-dom';


const Possibilities: React.FC = () => {
  return (
    
<section id="Possibilities">
   
   <img src="/images/circle.png" className="bg-1" />
   <img src="/images/circle001.png" className="bg-2" />
   <img src="/images/vector.png" className="bg-3" />
 
    <div className="cont">
       <div className="row">
          <div className="col-md-6 left">
       <h2>POSSIBILITIES</h2>
       <h1>How you can be a part of UnityFund?</h1>
       <p>We’ve worked with over 400 companies to build blockchain solutions for their business, and we are still growing.</p>
          </div>
          <div className="col-md-6 right">
          <div className="row">
             <div className="col-md-6">
                <h3 className="links"><a href="#" >Smart contracts</a></h3>
                <h3 className="links"><a href="#" >Cloud storage</a></h3>
             </div>
             <div className="col-md-6">
                <h3 className="links"><a href="#" >Paying employees</a></h3>
                <h3 className="links"><a href="#" >Electronic voting</a></h3>
             </div>
          </div>
          </div>
       </div>
    </div>
 
    <div className="cont cont-inner">
       <div className="row">
          <div className="col-md-6 text-center">
             <img src="/images/bitcoin-img.png" className="bitcoin-img" />
          </div>
          <div className="col-md-6">
             <h2>FEATURES</h2>
             <h1>Blockchain spreads Trust everywhere</h1>
             <p>Our team has created blockchain solutions for over 400 companies, and we are still growing. From less paperwork and fewer disputes, to happier customers and entirely new business methods, a shared record of truth is invaluable.</p>
          <button className="started-btn">Get Started</button>
          </div>
       </div>
    </div>
 </section>

  );
};

export default Possibilities;