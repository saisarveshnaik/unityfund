import React from 'react';
import '../styles/Wallet.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { AiFillDollarCircle } from "react-icons/ai";
import { FaClipboard, FaArrowCircleRight } from 'react-icons/fa';  
import { FaHistory, FaArrowDown, FaArrowUp, FaSyncAlt } from 'react-icons/fa';
import { FaArrowRight, FaMoneyBillWave } from 'react-icons/fa';

const Wallet: React.FC = () => {
    const [isSidebarVisible, setSidebarVisible] = React.useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="app">
            <Header toggleSidebar={toggleSidebar} />
            <div className="d-flex content">
                <Sidebar isVisible={isSidebarVisible} />
                <main className="content-area">
                    <div className=" mt-4">


                    <div className="card shadow-sm mb-4 border-0">
                        <div className="card-body">

                        <h5 className="card-title subscription-title">Wallet Balance</h5>

                            <div className='row'>
                                <div className='col-md-4'>
                            <div className='portfolio-div text-center green-div'>
                            <h3 className='mt-3'>Total Balance</h3>
                                            <h2>$0.00</h2>
                                            
                                            </div>
                                </div>
                                <div className='col-md-4'>
                            <div className='portfolio-div text-center green-div'>
                            <h3 className='mt-3'>Available Balance</h3>
                                            <h2>$0.00</h2>
                                            
                                            </div>
                                </div>
                                <div className='col-md-4'>
                            <div className='portfolio-div text-center green-div'>
                            <h3 className='mt-3'>Locked Balance</h3>
                                            <h2>$0.00</h2>
                                           
                                            </div>
                                </div>
                            </div>

                         </div>
                         </div>   

  


                                                 <div className="card shadow-sm mb-4 border-0">
      <div className="card-body">
        <h5 className="card-title deposit-title">
          <FaArrowCircleRight className="mr-2" />
          Deposit Funds
        </h5>

        <div className="text-center mb-4">
          <img src="https://via.placeholder.com/150" alt="QR Code" className="img-fluid qr-code" />
        </div>

        <div className="input-group deposit-input-group mb-4">
          <input
            type="text"
            className="form-control deposit-input"
            value="0x1234...abcd"
            readOnly
          />
          <div className="input-group-append">
            <button className="btn btn-outline-info copy-btn">
              <FaClipboard className="mr-1" />
              Copy
            </button>
          </div>
        </div>

        <p className="text-muted deposit-info">
          <small>Send only BSC-compatible USDT to this address.</small>
        </p>
      </div>
    </div>

                        {/* Transaction History */}
                        <div className="card transaction-card shadow-sm mb-4 border-0">
      <div className="card-body">
        <h5 className="card-title subscription-title">
          <FaHistory className="mr-2" />
          Transaction History
        </h5>

        <div className="mb-4">
          <button className="btn btn-success ml-2 portfolio-select-button pl-5 pr-5">
            <FaArrowDown className="mr-1" />
            Deposits
          </button>
          <button className="btn btn-success ml-2 portfolio-select-button pl-5 pr-5">
            <FaArrowUp className="mr-1" />
            Withdrawals
          </button>
          <button className="btn btn-success ml-2 portfolio-select-button pl-5 pr-5">
            <FaSyncAlt className="mr-1" />
            Internal Transfers
          </button>
        </div>

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
              <td>2023-01-01</td>
              <td>Deposit</td>
              <td>$1000</td>
              <td><span className="badge badge-success">Completed</span></td>
            </tr>
            <tr>
              <td>2023-01-02</td>
              <td>Withdrawal</td>
              <td>$500</td>
              <td><span className="badge badge-warning">Pending</span></td>
            </tr>
            <tr>
              <td>2023-01-03</td>
              <td>Internal Transfer</td>
              <td>$250</td>
              <td><span className="badge badge-success">Completed</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    <div className="row">
      {/* Internal Transfer Section */}
      <div className="col-md-6">
        <div className="card shadow-sm mb-4 border-0">
          <div className="card-body">
            <h5 className="card-title transfer-title">
              <FaArrowRight className="mr-2" />
              Internal Transfer
            </h5>
            <div className="form-group">
              <label>Recipient ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter recipient ID"
              />
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter amount"
              />
            </div>
            <div className="form-group">
              <label>OTP</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter OTP"
              />
            </div>
            <button className="btn btn-success btn-block">Transfer Now</button>
          </div>
        </div>
      </div>

      {/* Withdrawal Section */}
      <div className="col-md-6">
        <div className="card shadow-sm mb-4 border-0">
          <div className="card-body">
            <h5 className="card-title withdrawal-title">
              <FaMoneyBillWave className="mr-2" />
              Withdraw Funds
            </h5>
            <div className="form-group">
              <label>Withdrawal Method</label>
              <select className="form-control">
                <option>Earnings</option>
                <option>Profits</option>
              </select>
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter amount"
              />
            </div>
            <p className="text-muted">
              <small>
                Minimum withdrawal: $100. A 5% platform fee applies.
              </small>
            </p>
            <button className="btn btn-danger btn-block">Withdraw Now</button>
          </div>
        </div>
      </div>
    </div>




                    </div>
                </main>
            </div>
        </div>
    );
};

export default Wallet;
