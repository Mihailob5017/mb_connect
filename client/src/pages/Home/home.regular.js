import React, { useState } from 'react';
import './home-regular.style.scss';
// Images
import Profile from '../../images/user.svg';
// React Router
import { Link } from 'react-router-dom';
// Components
import Navbar from '../../components/navbar/navbar.component';
import Input from '../../components/input/input.component';

// Code
const HomepageRegular = () => {
	const [selectedBtn, changeSelectedColor] = useState('all-types');

	const handleBtnChange = (e) => {
		changeSelectedColor(e.target.value);
	};

	return (
		<>
			<Navbar>
				<button className='profile-btn'>
					<img src={Profile} alt='Profile Icon' />
					<Link to='/profile'>Profile</Link>
				</button>
			</Navbar>

			<div className='main-content-wrapper'>
				<div className='filter-wrapper'>
					{/* Search Component */}
					<Input type='text' name='search' label='Search' isSearch={true} />
					{/* Filters Component */}
					<button
						value='all-types'
						onClick={(e) => handleBtnChange(e)}
						className={`filter-btn firt-btn ${
							selectedBtn === 'all-types' && 'selected-btn'
						}`}
					>
						All Types
					</button>
					<label>Development</label>
					<button
						onClick={(e) => handleBtnChange(e)}
						value='software-development'
						className={`filter-btn ${
							selectedBtn === 'software-development' && 'selected-btn'
						}`}
					>
						Software Development
					</button>
					<label>Design</label>
					<button
						onClick={(e) => handleBtnChange(e)}
						value='industry-design'
						className={`filter-btn ${
							selectedBtn === 'industry-design' && 'selected-btn'
						}`}
					>
						Industry Design
					</button>
					<label>Support</label>
					<button
						onClick={(e) => handleBtnChange(e)}
						value='pr-support'
						className={`filter-btn ${
							selectedBtn === 'pr-support' && 'selected-btn'
						}`}
					>
						PR Support
					</button>
					<button
						onClick={(e) => handleBtnChange(e)}
						value='tech-support'
						className={`filter-btn ${
							selectedBtn === 'tech-support' && 'selected-btn'
						}`}
					>
						Technical Support
					</button>
					<label>Managment</label>
					<button
						onClick={(e) => handleBtnChange(e)}
						value='industry-manager'
						className={`filter-btn ${
							selectedBtn === 'industry-manager' && 'selected-btn'
						}`}
					>
						Industry Manager
					</button>
					<button
						onClick={(e) => handleBtnChange(e)}
						value='supplies-manager'
						className={`filter-btn ${
							selectedBtn === 'supplies-manager' && 'selected-btn'
						}`}
					>
						Supplies Manager
					</button>
				</div>
				<div className='expert-list-wrapper'></div>
			</div>
		</>
	);
};

export default HomepageRegular;
