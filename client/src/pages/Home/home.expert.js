import React from 'react';
import './home-expert.style.scss';
// Images
import Profile from '../../images/user.svg';
import Requests from '../../images/bell.svg';

// React Router Dom
import { Link } from 'react-router-dom';

//Redux

// Components
import Navbar from '../../components/navbar/navbar.component';
import Button from '../../components/button/button.component';
import RequestList from '../../components/requests/request-list.component';

// Code

const HomepageExpert = () => {
	return (
		<>
			<Navbar>
				<button className='profile-btn'>
					<img src={Requests} alt='Profile Icon' />
					<Link to='/'>
						<label>0</label>Requests
					</Link>
				</button>
				<button className='profile-btn'>
					<img src={Profile} alt='Profile Icon' />
					<Link to='/profile'>Profile</Link>
				</button>
			</Navbar>
			<div className='main-content-wrapper'>
				<div className='info-container'>
					<h1 className='info-status'>
						Current Status: <label>Active</label>
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
					<Button extraStyle='reverse-btn'>Set To Unavailable</Button>
				</div>
				<RequestList />
			</div>
		</>
	);
};

export default HomepageExpert;
