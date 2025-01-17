import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./global.css";
import Loader from "./components/Loader";

// IMPORTING PAGES HERE //
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

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


// Main App Component
const App: React.FC = () => {
  return (
    <Router>
        <LoaderWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </LoaderWrapper>
    </Router>
  );
};

export default App;
