import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

import HamburgerMenu from 'react-hamburger-menu';
function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const [isNavScrolled, setisNavScrolled] = useState(false);
	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(true);
		}
	};

	const onMouseLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(false);
		}
	};
	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (typeof window !== 'undefined') {
			if (window.scrollY > lastScrollY) {
				// if scroll down hide the navbar
				setShow(false);
			} else {
				// if scroll up show the navbar
				setShow(true);
			}

			// remember current page location to use in the next move
			setLastScrollY(window.scrollY);
		}
	};

	useEffect(() => {
		showButton();
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', controlNavbar);

			// cleanup function
			return () => {
				window.removeEventListener('scroll', controlNavbar);
			};
		}
		// return () => {
		// 	window.removeEventListener('scroll', controlNavbar);
		// };
	}, [lastScrollY]);
	window.addEventListener('resize', showButton);
	const changeNavbarColor = () => {
		if (window.scrollY >= 50) {
			setisNavScrolled(true);
		} else {
			setisNavScrolled(false);
		}
	};
	window.addEventListener('scroll', changeNavbarColor);
	return (
		<>
			<nav className={`active ${show && 'hidden'}`}>
				<div
					className={
						isNavScrolled
							? show
								? 'navbar-container scrolled nav__blue'
								: 'navbar-container scrolled'
							: 'navbar-container'
					}
				>
					<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
						{/* TRVL
						<i className='fab fa-typo3' /> */}
						<img src='/images/ody2.png' className='lgo' alt='logo'></img>
					</Link>
					<div className='menu-icon'>
						<HamburgerMenu
							isOpen={click}
							menuClicked={handleClick}
							width={30}
							height={20}
							strokeWidth={1}
							rotate={0}
							color='white'
							borderRadius={5}
							animationDuration={0.5}
						/>
					</div>
					{/* <Hamburger
						className='menu-icon'
						toggled={isOpen}
						toggle={setIsOpen}
						direction='left'
					/> */}

					{/* <div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div> */}
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='/' className='nav-links' onClick={closeMobileMenu}>
								{show.toString()}
							</Link>
						</li>
						<li
							className='nav-item'
							onMouseEnter={onMouseEnter}
							onMouseLeave={onMouseLeave}
						>
							<Link
								to='/services'
								className='nav-links'
								onClick={closeMobileMenu}
							>
								Services <i className='fas fa-caret-down' />
							</Link>
							{dropdown && <Dropdown />}
						</li>
						<li className='nav-item'>
							<Link
								to='/products'
								className='nav-links'
								onClick={closeMobileMenu}
							>
								Products
							</Link>
						</li>

						<li>
							<Link
								to='/sign-up'
								className='nav-links-mobile'
								onClick={closeMobileMenu}
							>
								Join Now
							</Link>
						</li>
					</ul>
					{button && <Button buttonStyle='btn--outline'>Join Now</Button>}
				</div>
			</nav>
		</>
	);
}

export default Navbar;
