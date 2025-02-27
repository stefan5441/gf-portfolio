import { BrowserRouter, Routes, Route } from "react-router-dom";

import Work from "./components/Work";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Heading from "./components/Heading";
import ProjectPage from "./components/ProjectPage";
import FloatingNavBar from "./components/FloatingNavBar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="container mx-auto max-w-3xl">
                <NavBar />
                <Heading />
                <Work />
              </div>
              <FloatingNavBar />
              <Footer />
            </>
          }
        />
        <Route
          path="/:projectTitle"
          element={
            <>
              <div className="container mx-auto max-w-3xl">
                <NavBar />
                <ProjectPage />
              </div>
              <FloatingNavBar />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
