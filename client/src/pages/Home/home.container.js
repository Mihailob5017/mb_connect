import React, { useEffect } from 'react';
// React Router
import { useHistory } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';

// Components

// Code
const HomepageContainer = ({ isLogedIn }) => {
	// Variables
	const history = useHistory();

	// Check if the user is loged in,if not redirects it to the login page
	useEffect(() => {
		isLogedIn === false && history.push('/auth');
	}, []);

	return <div>Hello </div>;
};

// Accessing state
const mapStateToProps = (state) => {
	return {
		isLogedIn: state.interact.is_loged_in,
		userType: state.interact.user_type,
	};
};
// Connecting
export default connect(mapStateToProps)(HomepageContainer);
