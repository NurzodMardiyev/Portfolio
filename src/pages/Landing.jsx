import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Proects from "../components/Proects.jsx";
import ContactMe from "../components/ContactMe";

export default function Landing() {
  return (
    <div>
      <Header />
      <About />
      <Proects />
      <ContactMe />
    </div>
  );
}
