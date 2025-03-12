import React from 'react';
import '../styles/Leaderboard.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { FaTrophy, FaArrowCircleUp } from 'react-icons/fa';

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



                    <div className="card transaction-card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="transaction-title">Leaderboard</h5>

        {/* Buttons (No interactivity for now) */}
        <div className="d-flex mb-3">
          <button className="btn btn-success ml-2 portfolio-select-button pl-5 pr-5">
            Weekly
          </button>
          <button className="btn btn-success ml-2 portfolio-select-button pl-5 pr-5">
            Monthly
          </button>
        </div>

        {/* Placeholder Table Display */}
        <div id="transaction-table">
          <table className="table transaction-table">
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
                <td>
                  <img
                    src={`https://ui-avatars.com/api/?name=John+Doe&background=random`}
                    alt="Profile"
                    className="rounded-circle profile-img"
                  />
                </td>
                <td>User{index + 1}</td>
                <td>{['Bronze', 'Silver', 'Gold', 'Platinum'][index % 4]}</td>
                <td>${(1000 * (index + 1)).toLocaleString()}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

 

                        {/* Personal Ranking */}
                        <div className="card shadow-sm mb-4 border-0">
      <div className="card-body">
        <h5 className="card-title ranking-title">
          <FaTrophy className="mr-2" />
          Your Ranking
        </h5>

        <p className="current-rank">
          <strong>Current Rank: #25</strong>
        </p>

        <div className="progress ranking-progress" style={{ height: '25px' }}>
          <div
            className="progress-bar bg-success font-weight-bold"
            role="progressbar"
            style={{ width: '60%' }}
            aria-valuenow={60}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            60% to next rank
          </div>
        </div>

        <p className="mt-3 rank-info text-muted">
          <small>
            <FaArrowCircleUp className="mr-1" />
            Keep up the great work! You're just $1,000 away from achieving the next rank. Let's do it!
          </small>
        </p>
      </div>
    </div>

                        {/* Share Button */}
                        <div className="text-center">
                            <button className="btn btn-info portfolio-select-button pl-5 pr-5">
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
