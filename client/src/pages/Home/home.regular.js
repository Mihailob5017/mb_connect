import React, { useState } from 'react';
import './home-regular.style.scss';
// Images
import Profile from '../../images/user.svg';

// Redux
import { connect } from 'react-redux';
// React Router
import { Link } from 'react-router-dom';
// Components
import Navbar from '../../components/navbar/navbar.component';
import Input from '../../components/input/input.component';
import ExpertList from '../../components/expert/expert-list.component';

// Code
const HomepageRegular = ({ options }) => {
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
				{/* Filters Component */}
				<div className='filter-wrapper'>
					<div className='filter-container'>
						<Input
							type='text'
							customClass='margin-2'
							name='search'
							label='Search'
							isSearch={true}
						/>
						<label>Development</label>
						{options
							.filter((option) => option.group === 'development')
							.map((option) => (
								<button
									value={option.value}
									onClick={(e) => handleBtnChange(e)}
									className={`filter-btn ${
										selectedBtn === option.value && 'selected-btn'
									}`}
								>
									{option.text}
								</button>
							))}
						<label>Design</label>
						{options
							.filter((option) => option.group === 'design')
							.map((option) => (
								<button
									value={option.value}
									onClick={(e) => handleBtnChange(e)}
									className={`filter-btn ${
										selectedBtn === option.value && 'selected-btn'
									}`}
								>
									{option.text}
								</button>
							))}
						<label>Education</label>
						{options
							.filter((option) => option.group === 'education')
							.map((option) => (
								<button
									value={option.value}
									onClick={(e) => handleBtnChange(e)}
									className={`filter-btn ${
										selectedBtn === option.value && 'selected-btn'
									}`}
								>
									{option.text}
								</button>
							))}
					</div>
					<div className='filter-container'>
						{' '}
						<button
							value='all-types'
							onClick={(e) => handleBtnChange(e)}
							className={`filter-btn firt-btn ${
								selectedBtn === 'all-types' && 'selected-btn'
							}`}
						>
							All Types
						</button>
						<label>Support</label>
						{options
							.filter((option) => option.group === 'support')
							.map((option) => (
								<button
									value={option.value}
									onClick={(e) => handleBtnChange(e)}
									className={`filter-btn ${
										selectedBtn === option.value && 'selected-btn'
									}`}
								>
									{option.text}
								</button>
							))}
						<label>Art</label>
						{options
							.filter((option) => option.group === 'art')
							.map((option) => (
								<button
									value={option.value}
									onClick={(e) => handleBtnChange(e)}
									className={`filter-btn ${
										selectedBtn === option.value && 'selected-btn'
									}`}
								>
									{option.text}
								</button>
							))}
						<label>Sales</label>
						{options
							.filter((option) => option.group === 'sales')
							.map((option) => (
								<button
									value={option.value}
									onClick={(e) => handleBtnChange(e)}
									className={`filter-btn ${
										selectedBtn === option.value && 'selected-btn'
									}`}
								>
									{option.text}
								</button>
							))}
					</div>
					{/* End of Filters Component */}
				</div>
				<ExpertList />
			</div>
		</>
	);
};
const mapStateToProps = (state) => ({
	options: state.interact.options,
});

export default connect(mapStateToProps)(HomepageRegular);
