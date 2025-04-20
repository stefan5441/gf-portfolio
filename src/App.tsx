import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Projects from "./components/Work";
import Heading from "./components/Heading";
import ProjectPage from "./components/ProjectPage";
import ScrollToTop from "./components/ScrollToTop";
import FloatingNavBar from "./components/FloatingNavBar";

export default function App() {
  const [isFloatingNavVisible, setIsFloatingNavVisible] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

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
      if (window.scrollY > navBarHeight) {
        setIsFloatingNavVisible(true);
      } else {
        setIsFloatingNavVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsPhone(window.innerWidth <= 640);
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
              {!isPhone && <FloatingNavBar visible={isFloatingNavVisible} />}
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
              {!isPhone && <FloatingNavBar visible={isFloatingNavVisible} />}
              <Footer isPhone={isPhone} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
