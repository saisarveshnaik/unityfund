import React from 'react';
import '../styles/Join.css';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import AOS from 'aos';
import panda from '../images/join-panda.png';

const Join: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1400, // Animation duration in milliseconds
      offset: 100, // Trigger offset in pixels
    });
  }, []);

  return (
    <div className="join-outer">
      <div className="cont join">
        <img src={panda} className="panda-img" alt="panda-img" data-aos="fade-up" />
        <div className="inner">
          <h1>JOIN US IN CREATING THE FUTURE</h1>
          <p>
            Whether you’re a gamer, investor, or partner, we’re always looking for collaborators
            who share our passion for innovation.
          </p>

          {/* Join Us Form */}
          <form className="mb-4 mt-5">
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
            <div className="text-center">
              <button type="submit" className="contact-btn">Join Us</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
