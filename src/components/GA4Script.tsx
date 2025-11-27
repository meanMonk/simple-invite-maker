import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA4_ID = "G-4KC2J9RJDN"; // Replace with your actual GA4 ID

const GA4Script = () => {
  const location = useLocation();

  useEffect(() => {
    // Load GA4 script
    if (typeof window.gtag === "undefined") {
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA4_ID}');
      `;
      document.head.appendChild(script2);
    }
  }, []);

  useEffect(() => {
    // Track page views on route change
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  useEffect(() => {
    // Track scroll depth
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      if (scrollPercent >= 25 && !sessionStorage.getItem("scroll_25")) {
        sessionStorage.setItem("scroll_25", "true");
        if (window.gtag) window.gtag("event", "scroll_depth", { percent: 25 });
      }
      if (scrollPercent >= 50 && !sessionStorage.getItem("scroll_50")) {
        sessionStorage.setItem("scroll_50", "true");
        if (window.gtag) window.gtag("event", "scroll_depth", { percent: 50 });
      }
      if (scrollPercent >= 75 && !sessionStorage.getItem("scroll_75")) {
        sessionStorage.setItem("scroll_75", "true");
        if (window.gtag) window.gtag("event", "scroll_depth", { percent: 75 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export default GA4Script;

// Type declaration for gtag
declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
    dataLayer?: any[];
  }
}