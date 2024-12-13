import React from 'react';
import logo from '../../assets/logo.svg';
import './HomeNav.css';
import LoginForm from '../LoginAuth/LoginForm';

const NavLinks = () => (
	<>
		<p>
			<a href="/">Blog</a>
		</p>
		<p>
			<a href="/">Product</a>
		</p>
		<p>
			<a href="/">Community</a>
		</p>
		<p>
			<a href="/">Pricing</a>
		</p>
		<p>
			<a href="/">Contact Us</a>
		</p>
		<p>
			<a href="/role-selection">
				login
			</a>
		</p>
	</>
);

const HomeNav = () => {
	return (
		<div className="landing-navbar">
			<div className="landing-navbar-logo">
				<img src={logo} alt="aankh-logo" />
			</div>
			<div className="landing-navbar-links">
				<NavLinks />
			</div>
		</div>
	);
};

export default HomeNav;
