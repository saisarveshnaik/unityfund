import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initializeGA = (measurementId: string) => {
  ReactGA.initialize(measurementId);
};

// Log a page view
export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};
