import React from 'react';
import '../styles/Portfolio.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Portfolio: React.FC = () => {
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
                    <div className="mt-4">
                        {/* Portfolio Summary */}
                        <div className="card shadow-lg mb-4 border-0">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Portfolio Summary</h5>
                                <p>Total Investment Amount: <strong className="text-success">$10,000</strong></p>
                                <p>ROI Breakdown: <strong className="text-info">20% Profit Split</strong></p>
                                <p>Withdrawable Balance: <strong className="text-warning">$2,000</strong></p>
                            </div>
                        </div>

                        {/* Investment Options */}
                        <div className="card shadow-sm mb-4 border-0">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Investment Options</h5>
                                <div className="list-group mb-3">
                                    <button className="list-group-item list-group-item-action">Basic Portfolio</button>
                                    <button className="list-group-item list-group-item-action">Pro Portfolio</button>
                                    <button className="list-group-item list-group-item-action">Elite Portfolio</button>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="number" className="form-control" placeholder="Investment Amount" />
                                    <div className="input-group-append">
                                        <button className="btn btn-success">Invest Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ROI Distribution View */}
                        <div className="card shadow-lg mb-4 border-0">
                            <div className="card-body">
                                <h5 className="card-title text-primary">ROI Distribution</h5>
                                <ul className="list-unstyled">
                                    <li><i className="fas fa-arrow-circle-right text-success mr-2"></i>10% Profit to User</li>
                                    <li><i className="fas fa-arrow-circle-right text-success mr-2"></i>10% Distributed to Uplines</li>
                                </ul>
                                <div className="mt-3">
                                    <span className="badge badge-info">Profit Timeline</span>
                                    <span className="badge badge-secondary ml-2">Upline Tree View</span>
                                </div>
                            </div>
                        </div>

                        {/* Direct Referral Requirement Widget */}
                        <div className="card shadow-sm mb-4 border-0">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Direct Referral Requirement</h5>
                                <div className="progress" style={{ height: '25px' }}>
                                    <div 
                                        className="progress-bar bg-warning font-weight-bold" 
                                        role="progressbar" 
                                        style={{ width: '75%' }} 
                                        aria-valuenow={75} 
                                        aria-valuemin={0} 
                                        aria-valuemax={100}
                                    >75% Complete</div>
                                </div>
                                <p className="mt-2 text-muted">
                                    <small>Meet direct referral goals to unlock downline earnings. <a href="#" className="text-decoration-underline">View eligibility criteria</a>.</small>
                                </p>
                            </div>
                        </div>

                        {/* Transaction History */}
                        <div className="card shadow-lg border-0">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Transaction History</h5>
                                <div className="d-flex mb-3">
                                    <button className="btn btn-outline-primary btn-sm mr-2">Deposits</button>
                                    <button className="btn btn-outline-primary btn-sm mr-2">Investments</button>
                                    <button className="btn btn-outline-primary btn-sm">Earnings</button>
                                </div>
                                <table className="table table-striped">
                                    <thead className="thead-light">
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
                                            <td><span className="badge badge-success">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <td>2025-01-20</td>
                                            <td>Investment</td>
                                            <td>$1,000</td>
                                            <td><span className="badge badge-warning">Pending</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Portfolio;
