import React from 'react';
import '../styles/Why.css';
import { useNavigate, Link } from 'react-router-dom';


const Why: React.FC = () => {
  return (
    
    <section id="Why">

 <img src="/images/cirlce-radius.png" className="bg-1" />
 <img src="/images/feature-shape-11.png" className="bg-2" />
 <img src="/images/feature-shape-13.png" className="bg-3" />
 <img src="/images/feature-shape-12.png" className="bg-4" />

   <div className="cont text-center">
      <h2>ABOUT UnityFund</h2>
      <h1>Why UnityFund?</h1>
      <p>We’ve empowered users to achieve success through blockchain<br/> crowdfunding, and our community is growing daily.</p>
   </div>
   <div className="cont">
      <div className="row">
         <div className="col-md-6 left">
            <div className="div1">
            <h3>Scalable<br/> Crowdfunding</h3>
            <p>Empower your financial journey with UnityFund’s scalable blockchain solutions:</p>
            <ul>
               <li>Activate your account effortlessly with blockchain integration.</li>
               <li>Flexible packages tailored to your growth goals.</li>
               <li>A system designed to adapt and scale as your network expands.</li>
            </ul>
            <img src="/images/feature-card-thumb-1.png" />
            </div>
         </div>
         <div className="col-md-6 right">
            <div className="div2">
               <h3>Empowered<br/> Connections</h3>
               <p>Grow your network and maximize your earning potential:</p>
            <ul>
               <li>A transparent and rewarding referral system.</li>
               <li>Tools to build and manage your downline effectively.</li>
               <li>Unlock new levels and benefits as you progress.</li>
            </ul>
               <img src="/images/feature-card-thumb-2.png" />
            </div>
            <div className="div3">
               <h3>Blockchain Security</h3>
               <p>Your financial journey, protected by cutting-edge blockchain<br/> technology:</p>
            <ul>
               <li>Secure BEP20 wallets for seamless transactions.</li>
               <li>Decentralized infrastructure ensuring safety and reliability.</li>
               <li>End-to-end encryption for peace of mind in every transaction.</li>
            </ul>
               <img src="/images/feature-card-thumb-3.png" />
            </div>
         </div>
      </div>
   </div>
</section>


  );
};

export default Why;