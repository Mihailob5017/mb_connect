import React from 'react';
import './navbar.style.scss';
import Logo from '../../images/cactus.svg';

const Navbar = ({ children }) => {
	return (
		<div className='navbar-wrapper'>
			<div className='logo'>
				<img alt='Cactus Logo' src={Logo} />
				<h1>MB Connect</h1>
			</div>
			<div className='links'>{children}</div>
		</div>
	);
};

export default Navbar;
