import React from 'react';
import './expert.style.scss';

// Redux
import { connect, useDispatch } from 'react-redux';
import { connectToExpert } from '../../redux/actions/user.action';
// Components
import Expert from './expert-single.component';
// Helper Functions
import { searchByInput } from '../../helpers/index';
import NoResults from '../no-results/no-results.component';
// Code
const ExpertList = ({
	experts = [],
	searchParamName,
	searchParamTitle,
	userId,
}) => {
	const primaryMsg = 'Sorry! No experts found';
	const secondaryMsg = `We're sorry that you can't find the people you are looking for.Feel free to browse through other categories`;
	const dispatch = useDispatch();
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
			{filteredExperts(experts).length === 0 ? (
				<NoResults primaryMsg={primaryMsg} secondaryMsg={secondaryMsg} />
			) : (
				filteredExperts(experts).map((expert) => (
					<Expert
						userId={userId}
						handleClick={() => dispatch(connectToExpert(userId, expert._id))}
						key={expert._id}
						{...expert}
					/>
				))
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	userId: state.user.user._id,
	experts: state.interact.experts,
	searchParamName: state.interact.search_param_name,
	searchParamTitle: state.interact.search_param_title,
});

export default connect(mapStateToProps)(ExpertList);
