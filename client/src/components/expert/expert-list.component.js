import React from 'react';
import './expert.style.scss';

// Redux
import { connect, useDispatch } from 'react-redux';
import { connectToExpert } from '../../redux/actions/user.action';
// Components
import Expert from './expert-single.component';
import Loading from '../loading/loading.component';
// Helper Functions
import { searchByInput } from '../../helpers/index';
import NoResults from '../no-results/no-results.component';
// Code
const ExpertList = ({
	experts = [],
	searchParamName,
	searchParamTitle,
	userId,
	loading,
	expert_group,
}) => {
	const primaryMsg = 'Sorry! No experts found';
	const secondaryMsg = `We're sorry that you can't find the people you are looking for. Feel free to browse through other categories`;
	const dispatch = useDispatch();
	// Filters Experts by specific param
	const filteredExperts = (experts) => {
		if (searchParamName !== '' && searchParamName.length >= 3)
			return experts.filter((expert) => searchByInput(expert, searchParamName));
		else if (searchParamTitle !== '' && searchParamTitle !== 'all-types')
			return experts.filter((expert) => expert.service === searchParamTitle);
		else return experts;
	};
	console.log(expert_group);
	const expertMsg =
		expert_group.length === 0 || expert_group.key === 'all-types'
			? `Our experts from each category`
			: `Experts from "${expert_group[0].text}" category`;

	return (
		<div className='expert-list-wrapper'>
			<h1 className='expert-list-header'>{expertMsg}</h1>

			{loading === true ? (
				<Loading />
			) : filteredExperts(experts).length === 0 ? (
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
	loading: state.interact.experts_loading,
	searchParamName: state.interact.search_param_name,
	searchParamTitle: state.interact.search_param_title,
});

export default connect(mapStateToProps)(ExpertList);
