import React from 'react';
import '../styles/Subscription.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Subscription: React.FC = () => {
    const [isSidebarVisible, setSidebarVisible] = React.useState<boolean>(true);

    const toggleSidebar = (): void => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="app">
            <Header toggleSidebar={toggleSidebar} />
            <div className="d-flex content">
                <Sidebar isVisible={isSidebarVisible} />
                <main className="content-area">
                    <div className="mt-4">
                        {/* Activation Overview */}
                        <div className="card shadow-lg mb-4 border-0">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Activation Overview</h5>
                                <p className="font-weight-bold">Subscription Fee: <span className="text-success">$150</span></p>
                                <p className="text-muted">Benefits:</p>
                                <ul className="list-unstyled pl-3">
                                    <li><i className="fas fa-check-circle text-success mr-2"></i>Investment access</li>
                                    <li><i className="fas fa-check-circle text-success mr-2"></i>Downline placement</li>
                                    <li><i className="fas fa-check-circle text-success mr-2"></i>Additional features</li>
                                </ul>
                                <button className="btn btn-primary btn-lg">Activate Now</button>
                            </div>
                        </div>

                        {/* Subscription Steps */}
                        <div className="card shadow-sm mb-4 border-0">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Subscription Steps</h5>
                                <div className="progress" style={{ height: '30px' }}>
                                    <div 
                                        className="progress-bar bg-info font-weight-bold" 
                                        role="progressbar" 
                                        style={{ width: '33%' }} 
                                        aria-valuenow={33} 
                                        aria-valuemin={0} 
                                        aria-valuemax={100}
                                    >Step 1: Deposit Funds</div>
                                    <div 
                                        className="progress-bar bg-success font-weight-bold" 
                                        role="progressbar" 
                                        style={{ width: '33%' }} 
                                        aria-valuenow={66} 
                                        aria-valuemin={0} 
                                        aria-valuemax={100}
                                    >Step 2: Activate Subscription</div>
                                    <div 
                                        className="progress-bar bg-primary font-weight-bold" 
                                        role="progressbar" 
                                        style={{ width: '34%' }} 
                                        aria-valuenow={100} 
                                        aria-valuemin={0} 
                                        aria-valuemax={100}
                                    >Step 3: Start Investing</div>
                                </div>
                            </div>
                        </div>

                        {/* Activation Form */}
                        <div className="card shadow-lg mb-4 border-0">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Activation Form</h5>
                                <p className="text-muted">Wallet Balance: <strong className="text-success">USDT (BEP20)</strong></p>
                                <button className="btn btn-success btn-lg">Activate</button>
                                <p className="mt-3 text-muted">
                                    <small>By activating, you agree to the <a href="#" className="text-decoration-underline">terms and conditions</a>.</small>
                                </p>
                            </div>
                        </div>

                        {/* Subscription Status */}
                        <div className="card shadow-sm mb-4 border-0">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Subscription Status</h5>
                                <p>Status: <span className="badge badge-danger">Inactive</span></p>
                                <p>Referral Count: <strong className="text-warning">0</strong></p>
                                <p>Required Downline Balance: <strong className="text-info">$500</strong></p>
                                <div className="progress" style={{ height: '30px' }}>
                                    <div 
                                        className="progress-bar bg-warning font-weight-bold" 
                                        role="progressbar" 
                                        style={{ width: '50%' }} 
                                        aria-valuenow={50} 
                                        aria-valuemin={0} 
                                        aria-valuemax={100}
                                    >Rank: Jade</div>
                                </div>
                            </div>
                        </div>

                        {/* Rank Details Section */}
                        <div className="card shadow-lg border-0">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Rank Details</h5>
                                <table className="table table-striped">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>Rank</th>
                                            <th>Criteria</th>
                                            <th>Gap Income Eligibility</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Jade</td>
                                            <td>$1,000 Downline Volume</td>
                                            <td>5%</td>
                                        </tr>
                                        <tr>
                                            <td>Pearl</td>
                                            <td>$5,000 Downline Volume</td>
                                            <td>10%</td>
                                        </tr>
                                        <tr>
                                            <td>Diamond</td>
                                            <td>$10,000 Downline Volume</td>
                                            <td>15%</td>
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

export default Subscription;
