import React from 'react';
import '../styles/Withdrawal.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { FaArrowRight } from "react-icons/fa";
import { FaClock, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { FaWallet, FaTrashAlt } from 'react-icons/fa';

const Withdrawal: React.FC = () => {
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

                        
                        {/* Withdrawal Form */}
                        <div className="card mb-4 shadow-sm border-0 custom-card">
      <div className="card-body">
        <h5 className="card-title custom-title">Withdrawal Form</h5>
        <div className="form-group">
          <label htmlFor="withdrawalType" className="custom-label">
            Withdrawal Type
          </label>
          <select className="form-control custom-select" id="withdrawalType">
            <option>Earnings</option>
            <option>Profits</option>
          </select>
        </div>
        <p className="mt-3 text-muted custom-balance">
          Available Balance: <strong>$500 USDT</strong>
        </p>
        <p className="text-warning custom-fee">
          Withdrawal Fee: <strong>5%</strong>
        </p>
        <button className="btn btn-gradient custom-btn">
          Withdraw <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>

                        {/* Withdrawal Processing */}
                        <div className="card mb-4 shadow-sm border-0 custom-card">
      <div className="card-body">
        <h5 className="card-title custom-title">Withdrawal Processing</h5>
        <table className="table ">
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Processing Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-01-20</td>
              <td>
                <span className="badge badge-warning custom-badge">
                  <FaExclamationCircle className="mr-1" /> Pending
                </span>
              </td>
              <td>$200 USDT</td>
              <td>24 Hours</td>
            </tr>
            <tr>
              <td>2025-01-18</td>
              <td>
                <span className="badge badge-success custom-badge">
                  <FaCheckCircle className="mr-1" /> Completed
                </span>
              </td>
              <td>$300 USDT</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

                        {/* Bank/Wallet Linking */}
                        <div className="card mb-4 shadow-sm border-0 custom-card">
      <div className="card-body">
        <h5 className="card-title custom-title">Bank/Wallet Linking</h5>
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between align-items-center custom-list-item">
            <div className="d-flex align-items-center">
              <FaWallet className="mr-2 " />
              <span>Wallet Address 1</span>
            </div>
            <button className="btn btn-sm btn-danger custom-remove-btn">
              <FaTrashAlt className="mr-1" /> Remove
            </button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center custom-list-item">
            <div className="d-flex align-items-center">
              <FaWallet className="mr-2 " />
              <span>Wallet Address 2</span>
            </div>
            <button className="btn btn-sm btn-danger custom-remove-btn">
              <FaTrashAlt className="mr-1" /> Remove
            </button>
          </li>
        </ul>
        <button className="btn  custom-add-btn">
          <FaWallet className="mr-2" /> Add New Address
        </button>
        <p className="text-muted mt-2 custom-text">
          <small>Security confirmation required (Google Authenticator or PIN).</small>
        </p>
      </div>
    </div>


                    </div>
                </main>
            </div>
        </div>
    );
};

export default Withdrawal;
