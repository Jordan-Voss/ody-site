import React from "react";
import "../App.css";
import HeroSection from "../components/Home/HeroSection";
import Footer from "../components/All/Footer";
import Philosophy from "../components/Home/Philosophy";
import About from "../components/Home/About";
import Pricing from "../components/Home/Pricing";
// import Spotify from "../components/Spotify";
import Slideshow from "../components/Home/Slideshow";
import Gallery from "../components/Home/Gallery";
import SpotifyComponent from "../components/Home/Spotify";

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
