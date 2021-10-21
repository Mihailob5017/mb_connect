import React, { useState } from 'react';
import './home-regular.style.scss';
// Images
import Profile from '../../images/user.svg';
// Redux
import { connect, useDispatch } from 'react-redux';
import {
	setSearchParamTitle,
	setSearchParamName,
} from '../../redux/actions/interact.action';
// React Router
import { Link } from 'react-router-dom';

// Components
import Navbar from '../../components/navbar/navbar.component';
import Input from '../../components/input/input.component';
import ExpertList from '../../components/expert/expert-list.component';

// Code
const HomepageRegular = ({ options }) => {
	const [selectedBtn, changeSelectedColor] = useState('all-types');
	const [searchInput, setSearchInput] = useState('');
	const dispatch = useDispatch();

	const handleBtnChange = (e) => {
		changeSelectedColor(e.target.value);
		dispatch(setSearchParamName(''));
		setSearchInput('');
		dispatch(setSearchParamTitle(e.target.value));
	};

	const handleSearch = () => {
		if (searchInput.length < 3) {
			alert('Please type more than 3 characters to search');
			setSearchInput('');
			return;
		} else {
			dispatch(setSearchParamTitle('all-types'));
			changeSelectedColor('all-types');
			dispatch(setSearchParamName(searchInput));
		}
	};

	return (
		<>
			<Navbar>
				<Link to='/auth'>Log Out</Link>
			</Navbar>

			<div className='main-content-wrapper'>
				{/* Filters Component */}
				<div className='filter-wrapper'>
					<div className='filter-container'>
						<Input
							value={searchInput}
							handleChange={(name, value) => setSearchInput(value)}
							type='text'
							customClass='margin-2'
							name='search'
							label='Search'
							isSearch={true}
							searchHandler={handleSearch}
						/>
						<label>Development</label>
						{options
							.filter((option) => option.group === 'development')
							.map((option, i) => (
								<button
									key={i}
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
							.map((option, i) => (
								<button
									key={i}
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
							.map((option, i) => (
								<button
									key={i}
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
							.map((option, i) => (
								<button
									key={i}
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
							.map((option, i) => (
								<button
									key={i}
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
							.map((option, i) => (
								<button
									key={i}
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
