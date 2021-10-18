import React, { useEffect } from 'react';
// React Router
import { useHistory } from 'react-router-dom';
// Redux
import { connect, useDispatch } from 'react-redux';
import {
	getAllExperts,
	getAllRequests,
} from '../../redux/actions/interact.action';

// Components
import ExpertHomepage from './home.expert';
import RegularHomepage from './home.regular';

// Code
const HomepageContainer = ({
	isLogedIn,
	userType,
	pending_requests,
	accepted_requests,
	declined_requests,
}) => {
	// Variables
	const history = useHistory();
	const dispatch = useDispatch();

	// Check if the user is loged in,if not redirects it to the login page
	useEffect(() => {
		if (isLogedIn === false) history.push('/auth');
		else if (userType === 'regular') dispatch(getAllExperts());
		else
			dispatch(
				getAllRequests({
					pending_requests,
					accepted_requests,
					declined_requests,
				})
			);
	}, []);

	return (
		<>{userType === 'regular' ? <RegularHomepage /> : <ExpertHomepage />}</>
	);
};

// Accessing state
const mapStateToProps = (state) => {
	return {
		isLogedIn: state.interact.is_loged_in,
		userType: state.interact.user_type,
		pending_requests: state.user.user?.pending_requests || [],
		accepted_requests: state.user.user?.accepted_requests || [],
		declined_requests: state.user.user?.declined_requests || [],
	};
};
// Connecting
export default connect(mapStateToProps)(HomepageContainer);
