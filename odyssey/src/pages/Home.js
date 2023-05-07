import React from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Philosophy from '../components/Philosophy';
import About from '../components/About';


function Home() {
	return (
		<>
			<HeroSection />
			<About />
			<Philosophy />
			<Footer />
		</>
	);
}

export default Home;
