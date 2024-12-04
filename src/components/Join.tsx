import React from 'react';
import '../styles/Join.css';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import AOS from 'aos';
import panda from '../images/join-panda.png';

const Join: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1400, // Animation duration in milliseconds
      offset: 100, // Trigger offset in pixels
    });
  }, []);

  return (
    <div className="join-outer">
      <div className="cont join">
        <img src={panda} className="panda-img" alt="panda-img" data-aos="fade-up" />
        <div className="inner">
          <h1>JOIN US IN CREATING THE FUTURE</h1>
          <p>
            Whether you’re a gamer, investor, or partner, we’re always looking for collaborators
            who share our passion for innovation.
          </p>

            <div className="text-center">
              <button type="submit" className="contact-btn">Join Our Team</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
