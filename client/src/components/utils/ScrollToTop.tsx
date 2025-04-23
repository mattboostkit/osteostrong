import { useEffect } from "react";
import { useLocation } from "wouter";

// This component will scroll the window to the top whenever the route changes
const ScrollToTop = () => {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;
