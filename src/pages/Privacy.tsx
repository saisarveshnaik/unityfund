import React from 'react';
import '../styles/Privacy.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy: React.FC = () => {


    return (
        <>
            <Header/>
            <div className='privacy-outer'>
            <div className='cont privacy'>
            <h1>Privacy Policy</h1>
            </div>
            <div className='cont'>

            </div>
            </div>
            <Footer/>
        </>
    );
};

export default Privacy;
