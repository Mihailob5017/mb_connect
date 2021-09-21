import React from 'react';
import './expert.style.scss';

// Components
import Expert from './expert-single.component';

// Static Contnent

// Code
const ExpertList = ({ experts = [], searchParamName, searchParamTitle }) => {
	// Filters Experts by specific param
	const filteredExperts = (experts) => {
		return experts;
	};

	return (
		<div className='expert-list-wrapper'>
			{filteredExperts(experts).map((expert) => (
				<Expert {...expert} />
			))}
		</div>
	);
};

export default ExpertList;
