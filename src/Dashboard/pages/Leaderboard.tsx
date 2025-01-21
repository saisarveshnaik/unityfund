import React from 'react';
import '../styles/Leaderboard.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Leaderboard: React.FC = () => {
    const [isSidebarVisible, setSidebarVisible] = React.useState(true);
    const [timeframe, setTimeframe] = React.useState<'weekly' | 'monthly'>('weekly');

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    const toggleTimeframe = (newTimeframe: 'weekly' | 'monthly') => {
        setTimeframe(newTimeframe);
    };

    return (
        <div className="app">
            <Header toggleSidebar={toggleSidebar} />
            <div className="d-flex content">
                <Sidebar isVisible={isSidebarVisible} />
                <main className="content-area">
                    <div className="mt-4">
                        {/* Leaderboard Display */}
                        <div className="card shadow-lg mb-4 border-0">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Leaderboard</h5>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        <button 
                                            className={`btn btn-sm ${timeframe === 'weekly' ? 'btn-primary' : 'btn-outline-primary'}`} 
                                            onClick={() => toggleTimeframe('weekly')}
                                        >
                                            Weekly
                                        </button>
                                        <button 
                                            className={`btn btn-sm ml-2 ${timeframe === 'monthly' ? 'btn-primary' : 'btn-outline-primary'}`} 
                                            onClick={() => toggleTimeframe('monthly')}
                                        >
                                            Monthly
                                        </button>
                                    </div>
                                    <button className="btn btn-outline-info btn-sm">Share</button>
                                </div>
                                <table className="table table-hover">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>#</th>
                                            <th>Profile</th>
                                            <th>Username</th>
                                            <th>Rank</th>
                                            <th>Total Earnings</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[...Array(10)].map((_, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td><img src={`https://via.placeholder.com/40`} alt="Profile" className="rounded-circle" /></td>
                                                <td>User{index + 1}</td>
                                                <td>{['Bronze', 'Silver', 'Gold', 'Platinum'][index % 4]}</td>
                                                <td>${(1000 * (index + 1)).toLocaleString()}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Personal Ranking */}
                        <div className="card shadow-sm mb-4 border-0">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Your Ranking</h5>
                                <p>Current Rank: <strong>#25</strong></p>
                                <div className="progress" style={{ height: '25px' }}>
                                    <div 
                                        className="progress-bar bg-success font-weight-bold" 
                                        role="progressbar" 
                                        style={{ width: '60%' }} 
                                        aria-valuenow={60} 
                                        aria-valuemin={0} 
                                        aria-valuemax={100}
                                    >60% to next rank</div>
                                </div>
                                <p className="mt-3 text-muted">
                                    <small>Keep up the great work! You're just $1,000 away from achieving the next rank. Let's do it!</small>
                                </p>
                            </div>
                        </div>

                        {/* Share Button */}
                        <div className="text-center">
                            <button className="btn btn-info">
                                Share Your Achievement on Social Media
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Leaderboard;
