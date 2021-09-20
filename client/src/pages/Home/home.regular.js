import React from 'react';
import './home-regular.style.scss';
// Images
import Profile from '../../images/user.svg';
// React Router
import { Link } from 'react-router-dom';
// Components
import Navbar from '../../components/navbar/navbar.component';

// Code
const HomepageRegular = () => {
	return (
		<>
			<Navbar>
				<button className='profile-btn'>
					<img src={Profile} alt='Profile Icon' />
					<Link to='/profile'>Profile</Link>
				</button>
			</Navbar>
		</>
	);
};

export default HomepageRegular;
