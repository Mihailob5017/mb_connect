import React, { useState } from 'react';
import './home-expert.style.scss';

// React Router Dom
import { Link } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
// Api
import * as api from '../../api/index.api';

// Components
import Navbar from '../../components/navbar/navbar.component';

import RequestList from '../../components/requests/request-list.component';
import ResponseList from '../../components/responded-requests/responded-req-list.component';

// Code
const HomepageExpert = ({
	requested_users,
	accepted_users,
	declined_users,
	user,
}) => {
	const [available, setAvailable] = useState(
		user.status === 'available' ? true : false
	);
	const handleAvailable = async () => {
		setAvailable(!available);
		const res = await api.setStatus(
			available !== true ? 'available' : 'unavailable',
			user._id
		);
		alert(res.data);
	};
	return (
		<>
			<Navbar>
				<h1 className='navbar-count'>
					<label>{requested_users.length}</label>New Requests
				</h1>
				<Link to='/auth'>Log Out</Link>
			</Navbar>

			<div className='expert-status'>
				<h1>
					Users see you as:
					<label>{available === true ? 'Available' : 'Busy/Unavailable'}</label>
				</h1>
				<button onClick={handleAvailable} className='reverse-btn'>
					Set To {available === true ? 'Unavailable' : 'Available'}
				</button>
			</div>
			<div className='expert-content-wrapper'>
				<ResponseList
					header='Accepted Requests'
					accepted={true}
					user_list={accepted_users}
				/>
				<RequestList Id={user._id} request_users={requested_users} />
				<ResponseList header='Declined Requests' user_list={declined_users} />
			</div>
		</>
	);
};
const mapStateToProps = (state) => ({
	requested_users: state.interact.pending_users,
	accepted_users: state.interact.accepted_users,
	declined_users: state.interact.declined_users,
	user: state.user.user || {},
});
export default connect(mapStateToProps)(HomepageExpert);
