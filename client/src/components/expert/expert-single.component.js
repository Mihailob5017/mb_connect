import React from 'react';
import './expert.style.scss';
// Helper
import { restructureServiceName } from '../../helpers/index';

// Images
import ConnectSVG from '../../images/link_white.svg';

const Expert = ({
	userId,
	_id,
	first_name,
	email,
	about_me,
	last_name,
	service,
	price,
	profile_pic,
	pending_requests,
	accepted_requests,
	declined_requests,
	handleClick,
	status,
}) => {
	return (
		<div id={_id} className='expert-container'>
			{profile_pic === '' ? (
				<div className='image-placeholder'>
					<h1>
						{first_name.charAt(0).toUpperCase() +
							last_name.charAt(0).toUpperCase()}
					</h1>
				</div>
			) : (
				<img src={profile_pic} alt={first_name + ' ' + last_name} />
			)}
			<div className='expert-content'>
				<div className='name-container'>
					<h1 className='name-h1'>{first_name + ' ' + last_name}</h1>

					{accepted_requests.find((el) => el === userId) === userId ? (
						<div className='status-container accepted-status '>
							<div className='status-circle'></div>
							<p>Request Accepted</p>
						</div>
					) : declined_requests.find((el) => el === userId) === userId ? (
						<div className='status-container declined-status '>
							<div className='status-circle'></div>
							<p>Request Declined</p>
						</div>
					) : pending_requests.find((el) => el === userId) === userId ? (
						<div className='status-container busy-status'>
							<div className='status-circle'></div>
							<p>Request Pending</p>
						</div>
					) : status === 'unavailable' ? (
						<div className='status-container busy-status'>
							<div className='status-circle'></div>
							<p>User Busy</p>
						</div>
					) : (
						<>
							<button onClick={handleClick} className='connect-button'>
								<img src={ConnectSVG} alt='Connect' />
								<p>Connect</p>
							</button>
						</>
					)}
				</div>
				<div className='primary-info'>
					<h2>
						{restructureServiceName(service) + ' '} |
						<label className='green'> ${price}/hr</label>
					</h2>
				</div>
				<div className='primary-info'>
					<h2>{email}</h2>
				</div>
				<div className='secondary-info'>
					<p>
						{about_me.length > 120
							? about_me.substring(0, 120) + '...'
							: about_me}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Expert;
