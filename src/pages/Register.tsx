import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Register.css';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const [message3, setMessage3] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  const navigate = useNavigate();

  // Helper function to style messages based on content
  const getMessageStyle = (msg: string) => {
    if (!msg) return {};
    const isNegative = msg.toLowerCase().includes('error') || msg.toLowerCase().includes('failed') || msg.toLowerCase().includes('incorrect');
    return isNegative 
      ? { backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' }
      : { backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px' };
  };

  const verifyEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post('https://unity-fund-nine.vercel.app/api/auth/verify-user', { email });
      const successMsg = data.message || 'OTP has been sent to your email!';
      setMessage(successMsg);
      toast.success(successMsg, {
        style: { backgroundColor: 'green', color: 'white' }
      });
      setOtpSent(true);
    } catch (error) {
      console.error('Error verifying user:', error);
      const errorMsg = 'An error occurred. Please try again.';
      setMessage(errorMsg);
      toast.error(errorMsg, {
        style: { backgroundColor: 'red', color: 'white' }
      });
      setOtpSent(false);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading2(true);
    try {
      const { data } = await axios.post('https://unity-fund-nine.vercel.app/api/auth/verify-otp', { email, otp });
      const successMsg = data.message || 'OTP has been verified!';
      setMessage2(successMsg);
      toast.success(successMsg, {
        style: { backgroundColor: 'green', color: 'white' }
      });
    } catch (error) {
      console.error('Error verifying OTP:', error);
      const errorMsg = 'An error occurred. Please try again.';
      setMessage2(errorMsg);
      toast.error(errorMsg, {
        style: { backgroundColor: 'red', color: 'white' }
      });
    } finally {
      setLoading2(false);
    }
  };

  const registerUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading3(true);
    try {
      const { data } = await axios.post('https://unity-fund-nine.vercel.app/api/auth/register', { email, username, password });
      // Save token in local storage
      localStorage.setItem('token', data.token);
      const successMsg = data.message || 'You have registered Successfully!';
      setMessage3(successMsg);
      toast.success(successMsg, {
        style: { backgroundColor: 'green', color: 'white' }
      });
      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error) {
      console.error('Error occurred during registration:', error);
      const errorMsg = 'An error occurred during registration. Please try again later.';
      setMessage3(errorMsg);
      toast.error(errorMsg, {
        style: { backgroundColor: 'red', color: 'white' }
      });
    } finally {
      setLoading3(false);
    }
  };

  return (
    <div className="registration-page">
      <ToastContainer />
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
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        id="username" 
                        placeholder="Enter username" 
                        required 
                      />
                    </div>
                    <div className='row'>
                      <div className='col-md-8'>
                        <div className="form-group">
                          <label htmlFor="email">Email address</label>
                          <input 
                            type="email" 
                            className="form-control" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            id="email" 
                            placeholder="Enter email" 
                            required 
                          />
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <label htmlFor="">Verify Email</label>
                        <button 
                          type="button" 
                          className="btn btn-primary btn-block" 
                          onClick={verifyEmail} 
                          disabled={loading}
                        >
                          {loading ? (
                            <span>Loading...</span>
                          ) : (
                            'Get OTP'
                          )}
                        </button>
                      </div>
                    </div>
                    {message && <p style={getMessageStyle(message)}>{message}</p>}
                    {otpSent && (
                      <div className='row otpDiv'>
                        <div className='col-md-8'>
                          <div className="form-group">
                            <label htmlFor="otp">Enter OTP</label>
                            <input 
                              type="text" 
                              className="form-control" 
                              value={otp} 
                              onChange={(e) => setOtp(e.target.value)} 
                              id="otp" 
                              placeholder="Enter OTP" 
                              required 
                            />
                          </div>
                        </div>
                        <div className='col-md-4'>
                          <label htmlFor="">Verify OTP</label>
                          <button 
                            type="button" 
                            className="btn btn-primary btn-block" 
                            onClick={verifyOtp} 
                            disabled={loading2}
                          >
                            {loading2 ? (
                              <span>Loading...</span>
                            ) : (
                              'Verify OTP'
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                    {message2 && <p style={getMessageStyle(message2)}>{message2}</p>}
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input 
                            type="password" 
                            className="form-control" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            id="password" 
                            placeholder="Password" 
                            required 
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className="form-group">
                          <label htmlFor="referral">Referral id</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            id="referral" 
                            placeholder="Enter Referral id" 
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group form-check">
                      <input type="checkbox" className="form-check-input" id="agree" />
                      <label className="form-check-label" htmlFor="agree">
                        I agree to the terms and conditions
                      </label>
                    </div>
                    <div className='row'>
                      <div className='col-md-8'>
                        <button 
                          type="submit" 
                          className="btn btn-primary btn-block" 
                          onClick={registerUser} 
                          disabled={loading3}
                        >
                          {loading3 ? (
                            <span>Loading...</span>
                          ) : (
                            'Register'
                          )}
                        </button>
                      </div>
                      <div className='col-md-4'>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                          <button className="btn btn-primary btn-block">Go to Home</button>
                        </Link>
                      </div>
                    </div>
                    {message3 && <p style={getMessageStyle(message3)}>{message3}</p>}
                    <div className="text-center mt-3">
                      <p>Already have an account? <Link to="/login">Login here</Link></p>
                    </div>
                  </div>
                  <div className='col-md-5'>
                    <img src='/images/register.jpg' className='register-img' alt="Register" />
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
