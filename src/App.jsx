import { Routes, Route } from "react-router-dom";
import EnrollClientForm from "./components/EnrollClientForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";
import Cleaning from "./pages/service/Cleaning";
import Security from "./pages/service/Security";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      {/* <Home /> */}
      {/* <Security /> */}
      {/* <Cleaning /> */}
      {/* <About /> */}
      {/* <OurTeam /> */}
      {/*<EnrollClientForm /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/security-service" element={<Security />} />
        <Route path="/cleaning-service" element={<Cleaning />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
