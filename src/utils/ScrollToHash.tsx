import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// ScrollToHash component scrolls the page to the element with the specified hash in the URL
const ScrollToHash: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHash;
