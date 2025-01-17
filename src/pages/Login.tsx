import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { Link } from 'react-router-dom';


const Login: React.FC = () => {


  return (
 <div className="registration-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card shadow-lg rounded-lg">
              <div className="card-body">

                <div className='row'>
                    <div className='col-md-7'>

                        <div className='row'>
                            <div className='col-md-2'>
                            <img src="/images/logo/unityfund_logo.png" alt="Logo" className="logo-img" />
                            </div>
                            <div className='col-md-10'>
                            <h2 className="card-title mt-2">Login into your account</h2>
                            <p className="card-text">Login to use our amazing services.</p>
                            </div>
                        </div>

                <form>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter username" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                  </div>

                    <p><a href=''>Forgot your password?</a></p>

                  <div className='row'>
                    <div className='col-md-8'>
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </div>
                    <div className='col-md-4'>
                    <Link to="/" style={{ textDecoration: 'none' }}><button className="btn btn-primary btn-block">Go to Home</button></Link>
                    </div>
                  </div>

                </form>

                <div className="text-center mt-3">
                  <p>Dont have an account? <Link to="/register">Register here</Link></p>
                </div>
                    </div>
                    <div className='col-md-5'>
                        <img src='/images/login.jpg' className='register-img' />
                    </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
