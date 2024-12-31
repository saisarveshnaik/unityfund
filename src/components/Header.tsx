import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import logo from '../images/gaming_panda_logo.png';
import sun from '../images/light.svg';
import moon from '../images/dark.svg';
import line from '../images/line.png';
import join from '../images/form-img.png';

const Header: React.FC = () => {
  
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  // };

  const toggleLight = () => {
    setTheme((prevTheme) => (prevTheme = 'light' ));
  };

  const toggleDark = () => {
    setTheme((prevTheme) => (prevTheme = 'dark' ));
  };

  

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    designation: '',
    cv: null,
    cover: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault(); // Prevent the default behavior (reloading)

    const section = document.getElementById(targetId);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, files } = e.target;
    if (files) {
      setFormData(prevState => ({
        ...prevState,
        [id]: files[0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('location', formData.location);
    form.append('designation', formData.designation);
    form.append('cv', formData.cv!);
    form.append('cover', formData.cover);

    try {
      const response = await fetch('https://apigaming.imetatech.io/join_us.php', {
        method: 'POST',
        body: form
      });

      const data = await response.json();
      if (data.success) {
        setSuccessMessage(data.message);
        setErrorMessage('');
      } else {
        setErrorMessage(data.message);
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('An error occurred while submitting the form.');
      setSuccessMessage('');
    }
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
          <ul className="navbar-nav mr-auto ml-auto">
            <li className="nav-item">
              <a href="#vision" className="nav-link" onClick={(e) => handleClick(e, 'vision')}>
                Our Vision
              </a>
            </li>
            <li className="nav-item">
              <a href="#next" className="nav-link" onClick={(e) => handleClick(e, 'next')}>
                Upcoming Games
              </a>
            </li>
            <li className="nav-item">
              <a href="#legacy" className="nav-link" onClick={(e) => handleClick(e, 'legacy')}>
                Our Legacy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Roadmap</a>
            </li>
            <Link to="/blogs">
            <li className="nav-item">
              <a href="#" className="nav-link" >
                Blogs
              </a>
            </li>
            </Link>
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
              Join Our Team
            </button>
          </form>
          <div className="theme-toggler">
          <img src={sun} className="sun" alt="logo" onClick={toggleLight} />
            {/* <label className="switch">
              <input
                type="checkbox"
                onChange={toggleTheme}
                checked={theme === 'dark'}
              />
              <span className="slider round"></span>
            </label> */}
            <img src={moon} className="moon" alt="logo" onClick={toggleDark} />
          </div>
        </div>
      </nav>

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

                <div className='row'>
                  <div className='col-md-5 left'>
                    <img src={join} className="join-img" alt="logo" />
                  </div>
                  <div className='col-md-7 right text-center'>

                    <h2>Lets Work Together</h2>

                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3 mt-3">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-6 mb-3 mt-3">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="location"
                            placeholder="Enter your location"
                            value={formData.location}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="designation"
                            placeholder="Enter your designation"
                            value={formData.designation}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <input
                            type="file"
                            className="form-control"
                            id="cv"
                            onChange={handleFileChange}
                          />
                        </div>
                        <div className="col-md-12 mb-3">
                          <textarea
                            className="form-control"
                            id="cover"
                            rows={6}
                            placeholder="Write your cover letter"
                            value={formData.cover}
                            onChange={handleInputChange}
                          ></textarea>
                        </div>
                      </div>

                      <p>Your information is safe. Learn our <Link to="/privacy-policy"><a>Privacy Policy</a></Link></p>

                      

                      <div className="modal-footer">
                      {errorMessage && <p style={{ color: 'red', fontWeight: 'bold' }}>{errorMessage}</p>}
                      {successMessage && <p style={{ color: 'green', fontWeight: 'bold' }}>{successMessage}</p>}
                        <button type="button" id='close-btn' className="btn btn-secondary" onClick={toggleModal}>
                          Close
                        </button>
                        <button type="submit" id='submit-btn' className="btn btn-primary">
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

export default Header;
