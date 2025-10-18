// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  // Handle scroll on navigation
  useEffect(() => {
    if (pathname === "/") {
      // Always scroll to top on Home
      window.scrollTo(0, 0);
      return;
    }

    if (navigationType === "POP") {
      // Restore saved scroll position
      const savedPosition = window.history.state?.usr?.scroll || 0;
      window.scrollTo(0, savedPosition);
    } else {
      // New navigation → reset to top
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  // Continuously save scroll position
  useEffect(() => {
    const saveScroll = () => {
      window.history.replaceState(
        { ...window.history.state, usr: { scroll: window.scrollY } },
        ""
      );
    };

    window.addEventListener("scroll", saveScroll);
    return () => window.removeEventListener("scroll", saveScroll);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
