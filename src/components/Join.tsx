import React, { useState } from 'react';
import '../styles/Join.css';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import AOS from 'aos';
import panda from '../images/join-panda.png';
import join from '../images/form-img.png';

const Join: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState<string>(''); // To store success/error message

  React.useEffect(() => {
    AOS.init({
      duration: 1400, // Animation duration in milliseconds
      offset: 100, // Trigger offset in pixels
    });
  }, []);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const designation = (document.getElementById('designation') as HTMLInputElement).value;
    const cv = (document.getElementById('cv') as HTMLInputElement).files![0];
    const cover = (document.getElementById('cover') as HTMLTextAreaElement).value;

    formData.append('name', name);
    formData.append('email', email);
    formData.append('location', location);
    formData.append('designation', designation);
    formData.append('cv', cv);
    formData.append('cover', cover);

    const response = await fetch('https://apigaming.imetatech.io/join_us.php', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    
    if (data.success) {
      setMessage('Form submitted successfully');
    } else {
      setMessage('Failed to submit the form: ' + data.message);
    }
  };

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

          <div className="text-center">
            <button type="button" className="contact-btn" onClick={toggleModal}>
              Join Our Team
            </button>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          role="dialog"
          style={{ zIndex: 9999, display: 'block', paddingRight: '20px', paddingLeft: '20px' }}
          id="FormModal"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">

                <div className="row">
                  <div className="col-md-5 left">
                    <img src={join} className="join-img" alt="logo" />
                  </div>
                  <div className="col-md-7 right text-center">

                    <h2>Lets Work Together</h2>

                    <form onSubmit={handleFormSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3 mt-3">
                          <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                        </div>
                        <div className="col-md-6 mb-3 mt-3">
                          <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 col-6 mb-3">
                          <input type="text" className="form-control" id="location" placeholder="Enter your location" required />
                        </div>
                        <div className="col-md-6 col-6 mb-3">
                          <input type="text" className="form-control" id="designation" placeholder="Enter your designation" required />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <input type="file" className="form-control" id="cv" required />
                        </div>
                        <div className="col-md-12 mb-3">
                          <textarea
                            className="form-control"
                            id="cover"
                            rows={6}
                            placeholder="Write your cover letter"
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="modal-footer">
                        {/* Displaying the message below the form */}
                    {message && <p className="form-message mr-3">{message}</p>}
                        <button type="button" id="close-btn" className="btn btn-secondary" onClick={toggleModal}>
                          Close
                        </button>
                        <button type="submit" id="submit-btn" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Join;
