import React from 'react';
import './expert.style.scss';
// Redux
import { connect } from 'react-redux';
// Components
import Expert from './expert-single.component';
// Helper Functions
import { searchByInput } from '../../helpers/index';
// Code
const ExpertList = ({ experts = [], searchParamName, searchParamTitle }) => {
	// Filters Experts by specific param
	const filteredExperts = (experts) => {
		if (searchParamName !== '' && searchParamName.length >= 3)
			return experts.filter((expert) => searchByInput(expert, searchParamName));
		else if (searchParamTitle !== '' && searchParamTitle !== 'all-types')
			return experts.filter((expert) => expert.service === searchParamTitle);
		else return experts;
	};

	return (
		<div className='expert-list-wrapper'>
			{filteredExperts(experts).map((expert) => (
				<Expert key={expert._id} {...expert} />
			))}
		</div>
	);
};

const mapStateToProps = (state) => ({
	experts: state.interact.experts,
	searchParamName: state.interact.search_param_name,
	searchParamTitle: state.interact.search_param_title,
});

export default connect(mapStateToProps)(ExpertList);
