import React from 'react';
import '../styles/Withdrawal.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

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
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Withdrawal Form</h5>
                                <div className="form-group">
                                    <label htmlFor="withdrawalType">Withdrawal Type</label>
                                    <select className="form-control" id="withdrawalType">
                                        <option>Earnings</option>
                                        <option>Profits</option>
                                    </select>
                                </div>
                                <p>Available Balance: <strong>$500 USDT</strong></p>
                                <p>Withdrawal Fee: <strong>5%</strong></p>
                                <button className="btn btn-primary">Withdraw</button>
                            </div>
                        </div>

                        {/* Withdrawal Processing */}
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Withdrawal Processing</h5>
                                <table className="table table-striped">
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
                                            <td><span className="badge badge-warning">Pending</span></td>
                                            <td>$200 USDT</td>
                                            <td>24 Hours</td>
                                        </tr>
                                        <tr>
                                            <td>2025-01-18</td>
                                            <td><span className="badge badge-success">Completed</span></td>
                                            <td>$300 USDT</td>
                                            <td>-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Bank/Wallet Linking */}
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">Bank/Wallet Linking</h5>
                                <ul className="list-group mb-3">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>Wallet Address 1</span>
                                        <button className="btn btn-sm btn-danger">Remove</button>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <span>Wallet Address 2</span>
                                        <button className="btn btn-sm btn-danger">Remove</button>
                                    </li>
                                </ul>
                                <button className="btn btn-success">Add New Address</button>
                                <p className="text-muted mt-2"><small>Security confirmation required (Google Authenticator or PIN).</small></p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Withdrawal;
