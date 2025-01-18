// Main Component
import React from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { AiOutlineProfile } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";

const Home: React.FC = () => {
    const [isSidebarVisible, setSidebarVisible] = React.useState(true); // Sidebar visible by default
  
    const toggleSidebar = () => {
      setSidebarVisible(!isSidebarVisible);
    };
  
    return (
      <div className="app">
        <Header toggleSidebar={toggleSidebar} />
        <div className="d-flex content">
          <Sidebar isVisible={isSidebarVisible} />
          <main className="content-area">
            
            <div className='row'>
              <div className='col-md-4'>
                <div className='bigbox'>
                  <h1>Profile:</h1>
                  <AiOutlineProfile className='profile-icon' />
                  <div className='profile text-center'>
                    <img src='profile.png' className='profile-img' />
                    <h2>John Doe</h2>
                  </div>
                  <div className='earning-div text-center'>
                     <h2>$0.00</h2>
                     <h3>Total Earnings</h3>
                  </div>
                  <div className='referral-div text-left'>
                    <button><AiOutlineCopy /></button>
                  <h3>Referral ID</h3>
                 <h2>e8c29f2b-8c67-43a6-b6a4-5d9e7c9077c1</h2>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='balance-div'>
                <AiFillDollarCircle />
                      <h2>UnityFund Balance (IN USDT)</h2>
                      <h3>$0.00</h3>
                </div>
                <div className='balance-deposited-div'>
                <AiFillDollarCircle />
                      <h2>Deposited in 24 hrs</h2>
                      <h3>$0.00</h3>
                      <button>DEPOSIT</button>
                </div>
                <div className='balance-deposited-div withdraw-div'>
                <AiFillDollarCircle />
                      <h2>Withdrawal (IN USDT)</h2>
                      <h3>$0.00</h3>
                      <button>Withdraw</button>
                </div>
                <div className='balance-div rank-div'>
                <AiFillDollarCircle />
                      <h2>Your Rank</h2>
                      <h3>1334</h3>
                </div>
                
                
              </div>
              <div className='col-md-4'>
                <div className='portfolio-div text-center green-div'>
                <AiFillDollarCircle />
                <h2>$0.00</h2>
                <h3>Porftolio Earnings</h3>
                </div>
                <div className='portfolio-div text-center yellow-div'>
                <AiFillDollarCircle />
                <h2>$0.00</h2>
                <h3>Porftolio Earnings</h3>
                </div>
                <div className='portfolio-div text-center green-div'>
                <AiFillDollarCircle />
                <h2>$0.00</h2>
                <h3>Porftolio Earnings</h3>
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    );
  };
  
  export default Home;