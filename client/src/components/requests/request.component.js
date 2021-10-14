import React from 'react';
import './request.style.scss';

// Images
import Accept from '../../images/accept.svg';
import Decline from '../../images/letter-x.svg';
// Components

// Code
const Request = ({
	_id,
	first_name,
	last_name,
	profile_pic,
	acceptRequest,
}) => {
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
					<button
						onClick={() => acceptRequest(_id)}
						className='request-btn accept-btn'
					>
						<img src={Accept} alt='Accept' />
						<p>Accept</p>
					</button>
					<button className='request-btn decline-btn'>
						<img src={Decline} alt='Decline' />
						<p>Decline</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Request;
