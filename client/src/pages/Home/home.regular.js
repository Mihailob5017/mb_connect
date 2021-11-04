import React, { useState } from 'react';
import './home-regular.style.scss';
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
				<div className='filter-wrapper'>
					<div className='search-wrapper'>
						<label>FILTER EXPERTS</label>
						<Input
							value={searchInput}
							handleChange={(name, value) => setSearchInput(value)}
							type='text'
							customClass='margin-0'
							name='search'
							isSearch={true}
							placeholder={`Search by typing in the expert's name `}
							searchHandler={handleSearch}
						/>

						<div className='url-row'>
							<h3>
								Select through a vast roster of categories by clicking on a
								category you are mostly interested in.
							</h3>
						</div>
					</div>
					<div className='filter-content'>
						<div className='category-wrapper'>
							<button
								value='all-types'
								onClick={(e) => handleBtnChange(e)}
								className={`filter-btn firt-btn ${
									selectedBtn === 'all-types' && 'selected-btn'
								}`}
							>
								All Experts
							</button>
						</div>
						<div className='category-wrapper'>
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
						</div>
						<div className='category-wrapper'>
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
						</div>
						<div className='category-wrapper'>
							<label>{`Writing & Translation`}</label>
							{options
								.filter((option) => option.group === 'writing')
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
						<div className='category-wrapper'>
							{' '}
							<label>{`Admin & Customer Support`}</label>
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
						</div>
						<div className='category-wrapper'>
							<label>{`Finance & Accounting`}</label>
							{options
								.filter((option) => option.group === 'accounting')
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
						<div className='category-wrapper'>
							<label>{`Sales & Marketing`}</label>
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
				</div>
				<ExpertList
					expert_group={options.filter(
						(option) => option.value === selectedBtn
					)}
				/>
			</div>
		</>
	);
};
const mapStateToProps = (state) => ({
	options: state.interact.options,
});

export default connect(mapStateToProps)(HomepageRegular);
