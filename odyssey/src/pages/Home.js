import React from "react";
import "../App.css";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Philosophy from "../components/Philosophy";
import About from "../components/About";
import Pricing from "../components/Pricing";
// import Spotify from "../components/Spotify";
import Slideshow from "../components/Slideshow";
import Gallery from "../components/Gallery";
import SpotifyComponent from "../components/Spotify";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Philosophy />
      <Pricing />
      <SpotifyComponent />
      <Gallery />

      <Footer />
    </>
  );
}

export default Home;
