import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Clients from '../components/Clients';
import Why from '../components/Why';
import Features from '../components/Features';
import Possibilities from '../components/Possibilities';
import Technology from '../components/Technology';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home: React.FC = () => {

    return (
        <div className="">
            <Header />
            <Banner />
            <Clients />
            <Why />
            <Features />
            <Possibilities />
            <Technology />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Home;