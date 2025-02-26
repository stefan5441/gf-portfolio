import Work from "./components/Work";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Heading from "./components/Heading";
import FloatingNavBar from "./components/FloatingNavBar";

export default function App() {
  return (
    <>
      <div className="container mx-auto max-w-3xl">
        <NavBar />
        <Heading />
        <Work />
      </div>
      <FloatingNavBar />
      <Footer />
    </>
  );
}
