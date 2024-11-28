import React, { useState, useEffect } from "react";
import './global.css';
import Loader from "./components/Loader";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Vision from './components/Vision';
import Legacy from './components/Legacy';
import Next from './components/Next';
import Shaping from './components/Shaping';
import Journey from './components/Journey';
import Inside from './components/Inside';
import Join from './components/Join';
import Footer from './components/Footer';


function App() {

  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading process, e.g., fetching data
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Adjust the time as needed
        return () => clearTimeout(timer);
    }, []);

  return (
    
    <>
            {isLoading ? (
              <div className={`loader-container ${isLoading ? "" : "hidden"}`}>
                <Loader />
              </div>
            ) : (
              <div>
              <Header />
              <HeroSection />
              <Vision />
              <Legacy />
              <Next />
              <Shaping />
              <Journey />
              <Inside />
              <Join />
              <Footer />
            </div>
            )}
        </>


  );
}

export default App;
