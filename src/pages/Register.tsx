import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';
import { Link } from 'react-router-dom';


const Register: React.FC = () => {


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
                            <h2 className="card-title mt-2">Register an Account</h2>
                            <p className="card-text">Sign up to get started with our amazing services.</p>
                            </div>
                        </div>

                <form>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter username" />
                  </div>

                  <div className='row'> 
                    <div className='col-md-8'>
                    <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                  </div>
                    </div>
                    <div className='col-md-4'>
                    <label htmlFor="">Get OTP</label>
                    <button className="btn btn-primary btn-block">Verify Email</button>
                    </div>
                  </div>

                  

                  <div className='row'>
                    <div className='col-md-6'>
                    <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                  </div>
                    </div>
                    <div className='col-md-6'>
                    <div className="form-group">
                    <label htmlFor="referral">Referral id</label>
                    <input type="text" className="form-control" id="referral" placeholder="Enter Referral id" />
                  </div>
                    </div>
                  </div>

                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="agree" />
                    <label className="form-check-label" htmlFor="agree">I agree to the terms and conditions</label>
                  </div>

                  <div className='row'>
                    <div className='col-md-8'>
                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                    </div>
                    <div className='col-md-4'>
                    <Link to="/" style={{ textDecoration: 'none' }}><button className="btn btn-primary btn-block">Go to Home</button></Link>
                    </div>
                  </div>

                </form>

                <div className="text-center mt-3">
                  <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
                    </div>
                    <div className='col-md-5'>
                        <img src='/images/register.jpg' className='register-img' />
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

export default Register;
