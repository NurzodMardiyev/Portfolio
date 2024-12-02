import React from "react";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Proects from "../components/Proects.jsx";
import Header from "../components/Header.jsx";
import { Outlet } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
}
