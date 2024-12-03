import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './global.css';
import Loader from "./components/Loader";

// IMPORTING PAGES HERE //
import Home from './pages/Home';
import Blog from './pages/Blog';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookie from './pages/Cookie';

// LoaderWrapper component to handle the loader for route changes
const LoaderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        children
      )}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <LoaderWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/cookie-policy" element={<Cookie />} />
        </Routes>
      </LoaderWrapper>
    </Router>
  );
};

export default App;
