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
				<div className='main-info'>
					<h1>{first_name + ' ' + last_name}</h1>
					<h1>${price}</h1>
				</div>
				<p>{restructureServiceName(service)}</p>
				<div className='button-container'>
					{accepted_requests.find((el) => el === userId) === userId ? (
						<h1>Connected.The expert will be reaching out to you </h1>
					) : declined_requests.find((el) => el === userId) === userId ? (
						<h1>Request Declined.Try again Later </h1>
					) : pending_requests.find((el) => el === userId) === userId ? (
						<h1>Waiting for their Response</h1>
					) : status === 'unavailable' ? (
						<h1>Busy</h1>
					) : (
						<>
							<button onClick={handleClick} className='expert-button'>
								<img src={ConnectSVG} alt='Connect' />
								<p>Connect</p>
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Expert;
