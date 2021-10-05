import React, { useState } from 'react';
import './home-expert.style.scss';
// Images
import Profile from '../../images/user.svg';
import Requests from '../../images/bell.svg';

// React Router Dom
import { Link } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
// Api
import * as api from '../../api/index.api';

// Components
import Navbar from '../../components/navbar/navbar.component';
import Button from '../../components/button/button.component';
import RequestList from '../../components/requests/request-list.component';

// Code
const HomepageExpert = ({ requests, user }) => {
	const [available, setAvailable] = useState(
		user.status === 'available' ? true : false
	);
	console.log(user);
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
				<button className='profile-btn'>
					<img src={Requests} alt='Profile Icon' />
					<Link to='/'>
						<label>{requests.length}</label>Requests
					</Link>
				</button>
			</Navbar>
			<div className='main-content-wrapper'>
				<div className='info-container'>
					<h1 className='info-status'>
						Current Status:
						<label> {available === true ? 'Available' : 'Unavailable'}</label>
					</h1>
					<div className='info-stats'>
						<h1>
							Requests Approved: <label>10</label>
						</h1>
						<h1>
							Requests Denied: <label>4</label>
						</h1>
						<h1>
							Acceptance/Denial Rate: <label>2.5</label>
						</h1>
						<h1>
							Total Money Earned: <label>$250</label>
						</h1>
					</div>
					<Button handleClick={handleAvailable} extraStyle='reverse-btn'>
						Set To {available === true ? 'Unavailable' : 'Available'}
					</Button>
				</div>
				<RequestList request_users={requests} />
			</div>
		</>
	);
};
const mapStateToProps = (state) => ({
	requests: state.interact.pending_users,
	user: state.user.user || {},
});
export default connect(mapStateToProps)(HomepageExpert);
