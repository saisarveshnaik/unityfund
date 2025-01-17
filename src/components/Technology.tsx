import React from 'react';
import '../styles/Technology.css';
import { useNavigate, Link } from 'react-router-dom';


const Technology: React.FC = () => {
  return (
    
<section id="Technology">

<img src="/images/line-shape.png" className="bg-1" />
<img src="/images/circle001.png" className="bg-2" />
<img src="/images/circle002.png" className="bg-3" />

<div className="cont">
 <div className="row">
  <div className="col-md-6 left">
    <h2>TECHNOLOGY</h2>
    <h1>How does blockchain work for business?</h1>
    <p>We’ve worked with over 400 companies to build blockchain solutions for their business, and we are still growing.</p>
    <button className="started-btn">Get Started</button>
  </div>
  <div className="col-md-6 right">
  <a href="https://www.youtube.com/watch?v=rYQgy8QDEBI"><button className="play-btn">PLAY</button></a>
  </div>
  </div>
</div>

</section>


  );
};

export default Technology;