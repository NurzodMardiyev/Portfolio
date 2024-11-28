import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Proects from "./components/Proects.jsx";
import "./fonts/satoshi.css";

function App() {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <About />
      <div>
        <Proects />
      </div>
      <ContactMe />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
