import ReactGA from "react-ga4";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    const trackingId = import.meta.env.VITE_GA_ID;
    if (trackingId) {
      ReactGA.initialize(trackingId);
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }
  }, [location.pathname]);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
}
