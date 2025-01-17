import React from 'react';
import '../styles/Clients.css';
import { useNavigate, Link } from 'react-router-dom';
import SliderComponent from './SliderComponent';




const Clients: React.FC = () => {
   


  return (
    
    <section id="Clients">
   <div className="cont text-center">
      <h2>We are using top Technologies for our platform</h2>

      <SliderComponent />

   </div>
</section>


  );
};

export default Clients;