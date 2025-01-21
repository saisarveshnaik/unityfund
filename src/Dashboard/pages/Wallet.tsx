import React from 'react';
import '../styles/Wallet.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

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

                        {/* Wallet Balance Overview */}
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Wallet Balance</h5>
                                <p>Total Balance: <strong>$5000 USDT</strong></p>
                                <p>Available Balance: <strong>$3000 USDT</strong></p>
                                <p>Locked Balance: <strong>$2000 USDT</strong></p>
                            </div>
                        </div>

                        {/* Deposit Funds */}
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Deposit Funds</h5>
                                <div className="text-center mb-3">
                                    <img src="https://via.placeholder.com/150" alt="QR Code" className="img-fluid" />
                                </div>
                                <div className="input-group mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value="0x1234...abcd" 
                                        readOnly
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary">Copy</button>
                                    </div>
                                </div>
                                <p className="text-muted"><small>Send only BSC-compatible USDT to this address.</small></p>
                            </div>
                        </div>

                        {/* Transaction History */}
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Transaction History</h5>
                                <div className="mb-3">
                                    <button className="btn btn-outline-primary btn-sm mr-2">Deposits</button>
                                    <button className="btn btn-outline-primary btn-sm mr-2">Withdrawals</button>
                                    <button className="btn btn-outline-primary btn-sm">Internal Transfers</button>
                                </div>
                                <table className="table">
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
                                            <td>Completed</td>
                                        </tr>
                                        <tr>
                                            <td>2023-01-02</td>
                                            <td>Withdrawal</td>
                                            <td>$500</td>
                                            <td>Pending</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Internal Transfer Feature */}
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Internal Transfer</h5>
                                <div className="form-group">
                                    <label>Recipient ID</label>
                                    <input type="text" className="form-control" placeholder="Enter recipient ID" />
                                </div>
                                <div className="form-group">
                                    <label>Amount</label>
                                    <input type="number" className="form-control" placeholder="Enter amount" />
                                </div>
                                <div className="form-group">
                                    <label>OTP</label>
                                    <input type="text" className="form-control" placeholder="Enter OTP" />
                                </div>
                                <button className="btn btn-success">Transfer Now</button>
                            </div>
                        </div>

                        {/* Withdrawal Section */}
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Withdraw Funds</h5>
                                <div className="form-group">
                                    <label>Withdrawal Method</label>
                                    <select className="form-control">
                                        <option>Earnings</option>
                                        <option>Profits</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Amount</label>
                                    <input type="number" className="form-control" placeholder="Enter amount" />
                                </div>
                                <p className="text-muted"><small>Minimum withdrawal: $100. A 5% platform fee applies.</small></p>
                                <button className="btn btn-danger">Withdraw Now</button>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default Wallet;
