"use client";
import Navbar from "./Components/navbar.jsx";
import Header from "./Components/header.jsx";
import About from "./Components/about.jsx";
import Services from "./Components/services.jsx";
import Work from "./Components/Work.jsx";
import Contact from "./Components/contact.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
    </>
  );
}
