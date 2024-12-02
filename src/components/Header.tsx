import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import logo from '../images/gaming_panda_logo.png';
import line from '../images/line.png';

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="cont">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand">
        <Link to="/">
          <img src={logo} className="app-logo" alt="logo" />
        </Link>  
          <img src={line} className="line" alt="line" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#vision" className="nav-link">
                Our Vision
              </a>
            </li>
            <li className="nav-item">
              <a href="#next" className="nav-link">
                Upcoming Games
              </a>
            </li>
            <li className="nav-item">
              <a href="#legacy" className="nav-link">
                Our Legacy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Roadmap</a>
            </li>
            <li className="nav-item">
              <a href="#blogs" className="nav-link">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Explore More</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button
              type="button"
              className="blog-btn"
              onClick={toggleModal}
            >
              Join Us
            </button>
          </form>
        </div>
      </nav>

      {/* Bootstrap Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          role="dialog"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Join Us</h5>
                <button
                  type="button"
                  className="close"
                  onClick={toggleModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Email ID</label>
                      <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="location" className="form-label">Location</label>
                      <input type="text" className="form-control" id="location" placeholder="Enter your location" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="designation" className="form-label">Designation</label>
                      <input type="text" className="form-control" id="designation" placeholder="Enter your designation" />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="cv" className="form-label">Upload CV</label>
                      <input type="file" className="form-control" id="cv" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="coverLetter" className="form-label">Cover Letter</label>
                      <textarea
                        className="form-control"
                        id="coverLetter"
                        rows={1}
                        placeholder="Write your cover letter"
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={toggleModal}>
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
