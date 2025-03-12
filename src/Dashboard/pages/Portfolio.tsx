import React, { useState } from 'react';
import '../styles/Portfolio.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { AiFillDollarCircle } from "react-icons/ai";

const Portfolio: React.FC = () => {
    const [isSidebarVisible, setSidebarVisible] = React.useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    const [selectedCard, setSelectedCard] = useState<string | null>(null);

    const selectCard = (cardId: string): void => {
      setSelectedCard(cardId);
    };



    return (
        <div className="app">
            <Header toggleSidebar={toggleSidebar} />
            <div className="d-flex content">
                <Sidebar isVisible={isSidebarVisible} />
                <main className="content-area">
                    <div className="mt-4">
                        

                        <div className="card shadow-sm mb-4 border-0">
                        <div className="card-body">

                        <h5 className="card-title subscription-title">Portfolio Summary</h5>

                            <div className='row'>
                                <div className='col-md-4'>
                            <div className='portfolio-div text-center green-div'>
                            <h3 className='mt-3'>Total investment amount</h3>
                                            <h2>$0.00</h2>
                                            
                                            </div>
                                </div>
                                <div className='col-md-4'>
                            <div className='portfolio-div text-center green-div'>
                            <h3 className='mt-3'>ROI breakdown</h3>
                                            <h2>$0.00</h2>
                                            
                                            </div>
                                </div>
                                <div className='col-md-4'>
                            <div className='portfolio-div text-center green-div'>
                            <h3 className='mt-3'>Withdrawable balance</h3>
                                            <h2>$0.00</h2>
                                           
                                            </div>
                                </div>
                            </div>

                         </div>
                         </div>   

                        
                         <div className="container-fluid investment-container mb-4">
      <h5 className="investment-title subscription-title">Investment Options</h5>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div
            className={`card portfolio-card ${
              selectedCard === "basic-portfolio" ? "selected" : ""
            }`}
            onClick={() => selectCard("basic-portfolio")}
          >
            <div className="card-body text-center">
              <h6 className="portfolio-title">Basic Portfolio</h6>
              <p className="portfolio-description">
                Ideal for beginners, offering moderate returns.
              </p>
              <button className="btn btn-primary portfolio-select-button form-control">
                Select
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div
            className={`card portfolio-card ${
              selectedCard === "pro-portfolio" ? "selected" : ""
            }`}
            onClick={() => selectCard("pro-portfolio")}
          >
            <div className="card-body text-center">
              <h6 className="portfolio-title">Pro Portfolio</h6>
              <p className="portfolio-description">
                Designed for experienced investors seeking higher returns.
              </p>
              <button className="btn btn-primary portfolio-select-button form-control">
                Select
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div
            className={`card portfolio-card ${
              selectedCard === "elite-portfolio" ? "selected" : ""
            }`}
            onClick={() => selectCard("elite-portfolio")}
          >
            <div className="card-body text-center">
              <h6 className="portfolio-title">Elite Portfolio</h6>
              <p className="portfolio-description">
                Exclusive for high-value investors aiming for maximum returns.
              </p>
              <button className="btn btn-primary portfolio-select-button form-control">
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="investment-input-group d-flex align-items-center">
            <input
              type="number"
              className="form-control investment-input"
              placeholder="Investment Amount"
            />
            <button className="btn btn-success ml-2 portfolio-select-button pl-5 pr-5">
              Invest Now
            </button>
          </div>
        </div>
      </div>
    </div>



{/* ROI Distribution View */}
<div className="card  shadow-sm mb-4">
  <div className="card-body">
    <h5 className="subscription-title">ROI Distribution</h5>
    <ul className="roi-list">
      <li className="roi-item">
        <i className="fas fa-arrow-circle-right roi-icon"></i>
        10% Profit to User
      </li>
      <li className="roi-item">
        <i className="fas fa-arrow-circle-right roi-icon"></i>
        10% Distributed to Uplines
      </li>
    </ul>
    <div className="roi-badges">
      <span className="btn btn-success ml-2 portfolio-select-button pl-5 pr-5">Profit Timeline</span>
      <span className="btn btn-success ml-2 portfolio-select-button pl-5 pr-5">Upline Tree View</span>
    </div>
  </div>
</div>


{/* Direct Referral Requirement Widget */}
<div className="card shadow-sm mb-4">
  <div className="card-body">
    <h5 className="subscription-title">Direct Referral Requirement</h5>
    <div className="progress referral-progress">
      <div
        className="progress-bar referral-progress-bar"
        role="progressbar"
        style={{ width: '75%' }}
        aria-valuenow={75}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        75% Complete
      </div>
    </div>
    <p className="referral-description mt-3">
      Meet direct referral goals to unlock downline earnings.{' '}
      <a href="#" className="referral-link">View eligibility criteria</a>.
    </p>
  </div>
</div>


                        {/* Transaction History */}
                        <div className="card transaction-card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="transaction-title">Transaction History</h5>

        {/* Buttons (No interactivity for now) */}
        <div className="d-flex mb-3">
          <button className="btn btn-success ml-2 portfolio-select-button pl-5 pr-5">
            Deposits
          </button>
          <button className="btn btn-success ml-2 portfolio-select-button pl-5 pr-5">
            Investments
          </button>
          <button className="btn btn-success ml-2 portfolio-select-button pl-5 pr-5">
            Earnings
          </button>
        </div>

        {/* Placeholder Table Display */}
        <div id="transaction-table">
          <table className="table transaction-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-01-21</td>
                <td>Deposit</td>
                <td>$500</td>
                <td>
                  <span className="badge badge-success">Completed</span>
                </td>
              </tr>
              <tr>
                <td>2025-01-20</td>
                <td>Investment</td>
                <td>$1,000</td>
                <td>
                  <span className="badge badge-warning">Pending</span>
                </td>
              </tr>
              <tr>
                <td>2025-01-19</td>
                <td>Earning</td>
                <td>$50</td>
                <td>
                  <span className="badge badge-success">Completed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>


                    </div>
                </main>
            </div>
        </div>
    );
};

export default Portfolio;
