import React from "react";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Proects from "../components/Proects.jsx";

export default function LandingPage() {
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
