import { useState, useEffect } from "react";
import ScrollToTop from "./hooks/useScrollToTop";
import usePageTracking from "./hooks/usePageTracking";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Heading from "./components/Heading";
import NavBar from "./components/navigation/NavBar";
import Projects from "./components/projects/Projects";
import ProjectPage from "./components/projects/ProjectPage";
import FloatingNavBar from "./components/navigation/FloatingNavBar";

export default function App() {
  const [isPhone, setIsPhone] = useState(false);
  const [isFloatingNavVisible, setIsFloatingNavVisible] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem("scrollToProjects") === "true") {
      window.sessionStorage.removeItem("scrollToProjects");
      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navBarHeight = document.querySelector("nav")?.offsetHeight || 0;
      if (window.scrollY > navBarHeight && !isPhone) {
        setIsFloatingNavVisible(true);
      } else {
        setIsFloatingNavVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPhone]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsPhone(window.innerWidth <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageTracker />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="px-6 lg:px-0 max-w-5xl mx-auto">
                <NavBar />
                <Heading />
                <Projects />
              </div>
              <FloatingNavBar visible={isFloatingNavVisible} />
              <Footer isPhone={isPhone} />
            </>
          }
        />
        <Route
          path="/:projectTitle"
          element={
            <>
              <div className="px-6 lg:px-0 max-w-5xl mx-auto">
                <NavBar />
                <ProjectPage />
              </div>
              <FloatingNavBar visible={isFloatingNavVisible} />
              <Footer isPhone={isPhone} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function PageTracker() {
  usePageTracking();
  return null;
}
