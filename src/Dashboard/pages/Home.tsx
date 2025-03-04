// Main Component
import React from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { AiOutlineProfile } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";
import wallet from '../images/wallet.png';
import cash from '../images/cash.png';
import basket from '../images/basket.png';
import tick from '../images/tick.png';
import up from '../images/green-arrow.svg';
import down from '../images/red-arrow.svg';
import line from '../images/line.png';

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
              <div className='col-md-12'>
                
                <div className='statsdiv'>
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='stats'>
                    <img src={wallet} alt="wallet" className='mainIcon' />
                    <h2>UnityFund Balance</h2>
                    <h3>$159.15</h3>
                    <h4><span className='greenText'><img src={up} alt="arrow" className='arrow' />37.8%</span> this month</h4>
                    <img src={line} alt="line" className='statline' />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='stats'>
                    <img src={cash} alt="cash" className='mainIcon' />
                    <h2>Deposited in 24 hrs</h2>
                    <h3>$334.15</h3>
                    <h4><span className='redText'><img src={down} alt="arrow" className='arrow' />2%</span> this month</h4>
                    <img src={line} alt="line" className='statline' />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='stats'>
                    <img src={basket} alt="basket" className='mainIcon' />
                    <h2>Withdrawal </h2>
                    <h3>$66.15</h3>
                    <h4><span className='greenText'><img src={up} alt="arrow" className='arrow' />25%</span> this month</h4>
                    <img src={line} alt="line" className='statline' />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='stats'>
                    <img src={tick} alt="tick" className='mainIcon' />
                    <h2>Your Rank</h2>
                    <h3>2234</h3>
                    <h4><span className='redText'><img src={down} alt="arrow" className='arrow' />2%</span> this month</h4>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            </div>

            
            {/* <div className='row'>
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
            </div> */}


            <div className='warningDiv text-center'>
              <h2>Your account is not activated... Please subscribe <button className='subBtn'>Subscribe</button></h2>
            </div>

            
            <div className='row'>
              <div className='col-md-12'>
                
                <div className='statsdiv statsdiv2'>
                <div className='row'>
                  <div className='col-md-3'>
                    <div className='stats'>
                    <img src={wallet} alt="wallet" className='mainIcon' />
                    <h2>Total TEam</h2>
                    <h3>55647</h3>
                    <h4><span className='greenText'><img src={up} alt="arrow" className='arrow' />37.8%</span> this month</h4>
                    <img src={line} alt="line" className='statline' />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='stats'>
                    <img src={cash} alt="cash" className='mainIcon' />
                    <h2>Active Team Members</h2>
                    <h3>2234</h3>
                    <h4><span className='redText'><img src={down} alt="arrow" className='arrow' />2%</span> this month</h4>
                    <img src={line} alt="line" className='statline' />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='stats'>
                    <img src={basket} alt="basket" className='mainIcon' />
                    <h2>Direct Team Members </h2>
                    <h3>334</h3>
                    <h4><span className='greenText'><img src={up} alt="arrow" className='arrow' />25%</span> this month</h4>
                    <img src={line} alt="line" className='statline' />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className='stats'>
                    <img src={tick} alt="tick" className='mainIcon' />
                    <h2>Team Rank</h2>
                    <h3>4</h3>
                    <h4><span className='redText'><img src={down} alt="arrow" className='arrow' />2%</span> this month</h4>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            </div>



            {/* <div className='team-stats'>
              <h2>Team Stats</h2>
              <hr/>
              <div className='row'>
                <div className='col-md-3'>
                  <div className='item  text-center'>
                  <h3>Total Team</h3>
                  <h4>55647</h4>
                  </div>
                </div>
                <div className='col-md-3'>
                <div className='item  text-center'>
                <h3>Active Team Members</h3>
                <h4>2234</h4>
                  </div>
                </div>
                <div className='col-md-3'>
                <div className='item  text-center'>
                <h3>Direct Team Members</h3>
                <h4>334</h4>
                  </div>
                </div>
                <div className='col-md-3'>
                <div className='item  text-center'>
                <h3>Team Rank</h3>
                <h4>4</h4>
                  </div>
                </div>
              </div>
            </div> */}

            <div className='team-stats'>
              <h2>List of team</h2>
              <hr/>

              <div className="table-responsive">
              <table className="table">
              <thead>
    <tr>
      <th scope="col">Sr No. </th>
      <th scope="col">Team Username</th>
      <th scope="col">Joined on</th>
      <th scope="col">Rank</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <th scope="row">1</th>
    <td>TeamAlpha</td>
    <td>2023-08-12</td>
    <td>1</td>
    <td>Active</td>
  </tr>
  <tr>
    <th scope="row">2</th>
    <td>BetaSquad</td>
    <td>2023-07-25</td>
    <td>2</td>
    <td>Inactive</td>
  </tr>
  <tr>
    <th scope="row">3</th>
    <td>GammaCrew</td>
    <td>2023-06-15</td>
    <td>3</td>
    <td>Active</td>
  </tr>
  <tr>
    <th scope="row">4</th>
    <td>DeltaForce</td>
    <td>2023-05-05</td>
    <td>4</td>
    <td>Pending</td>
  </tr>
  <tr>
    <th scope="row">5</th>
    <td>EpsilonGroup</td>
    <td>2023-04-20</td>
    <td>5</td>
    <td>Active</td>
  </tr>
</tbody>
              </table>
              </div>
              
            </div>

          </main>
        </div>
      </div>
    );
  };
  
  export default Home;