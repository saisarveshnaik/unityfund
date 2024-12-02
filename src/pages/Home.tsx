import React from 'react';
import '../styles/Terms.css';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Vision from '../components/Vision';
import Legacy from '../components/Legacy';
import Next from '../components/Next';
import Shaping from '../components/Shaping';
import Journey from '../components/Journey';
import Inside from '../components/Inside';
import Join from '../components/Join';
import Footer from '../components/Footer';

const Home: React.FC = () => {


    return (
        <div className="">
            <Header />
            <HeroSection />
              <Vision />
              <Legacy />
              <Next />
              {/* <Shaping /> */}
              <Journey />
              <Inside />
              <Join />
              <Footer />
        </div>
    );
};

export default Home;