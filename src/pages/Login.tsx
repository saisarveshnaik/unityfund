import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('https://unity-fund-nine.vercel.app/api/auth/login', {
        email,
        password,
      });
      
      // Save token and user data in local storage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Show success toast
      toast.success(data.message || 'Login successful', {
        style: { backgroundColor: 'green', color: 'white' },
      });
      
      // Redirect to /dashboard after a short delay
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error: any) {
      // Handle and display error message
      const errorMsg =
        error.response?.data?.message || 'An error occurred during login. Please try again.';
      toast.error(errorMsg, {
        style: { backgroundColor: 'red', color: 'white' },
      });
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
                <div className="row">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-2">
                        <img src="/images/logo/unityfund_logo.png" alt="Logo" className="logo-img" />
                      </div>
                      <div className="col-md-10">
                        <h2 className="card-title mt-2">Login into your account</h2>
                        <p className="card-text">Login to use our amazing services.</p>
                      </div>
                    </div>
                    <form onSubmit={handleLogin}>
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <p>
                        <a href="">Forgot your password?</a>
                      </p>
                      <div className="row">
                        <div className="col-md-8">
                          <button type="submit" className="btn btn-primary btn-block">
                            Login
                          </button>
                        </div>
                        <div className="col-md-4">
                          <Link to="/" style={{ textDecoration: 'none' }}>
                            <button type="button" className="btn btn-primary btn-block">
                              Go to Home
                            </button>
                          </Link>
                        </div>
                      </div>
                    </form>
                    <div className="text-center mt-3">
                      <p>
                        Don't have an account? <Link to="/register">Register here</Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <img src="/images/login.jpg" className="register-img" alt="Login" />
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
