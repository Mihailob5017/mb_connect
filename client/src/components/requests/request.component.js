import React from 'react';
import './request.style.scss';
// React Router
import { Link } from 'react-router-dom';
// Images
import Accept from '../../images/accept.svg';
import Decline from '../../images/letter-x.svg';
import User from '../../images/user_white.svg';
// Components

// Code
const Request = ({ _id, first_name, last_name, profile_pic }) => {
	return (
		<div className='request-single'>
			{profile_pic !== '' ? (
				<img src={profile_pic} alt={first_name + ' ' + last_name} />
			) : (
				<div className='request-img img-placeholder'>
					<h1>
						{first_name.charAt(0).toUpperCase() +
							last_name.charAt(0).toUpperCase()}
					</h1>
				</div>
			)}

			<div className='request-info'>
				<h1>{first_name + ' ' + last_name}</h1>
				<div className='request-btns'>
					<button className='request-btn accept-btn'>
						<img src={Accept} alt='Accept' />
						<p>Accept</p>
					</button>
					<button className='request-btn decline-btn'>
						<img src={Decline} alt='Decline' />
						<p>Decline</p>
					</button>
					<Link to={`/user/${_id}`}>
						<button className='request-btn profile-btn'>
							<img src={User} alt='Profile' />
							<p>Profile</p>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Request;
