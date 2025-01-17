import React from "react";
import "../styles/Loader.css"; // Add styles for the loader
import 'aos/dist/aos.css';
import AOS from 'aos';


const Loader: React.FC = () => {

    React.useEffect(() => {
        AOS.init({
          duration: 1400, // Animation duration in milliseconds
          offset: 100,   // Trigger offset in pixels
        });
      }, []);

    return (
        <div className="loader-container">
          <div className="loader-content">
            <img src="images/logo/unityfund_logo.png" className="panda-logo" alt="panda-logo" data-aos="zoom-in" />
            <br/>
            {/* <div className="spinner"></div> */}

            <h1 className="">Unityfund</h1>

            <div className="containerrr">
            <div className="loading">
            <div className="percent">
            <div className="progress"></div>
            </div>
           </div>
           </div>

          </div>
        </div>
    );
};

export default Loader;