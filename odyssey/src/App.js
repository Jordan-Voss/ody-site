import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/services' exact element={<Services />} />
					<Route path='/products' exact element={<Products />} />
					<Route path='/sign-up' exact element={<SignUp />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
