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
						<h1 className='accepted-req'>
							<p>Request Approved</p>
							<p>The expert will contact you soon</p>
						</h1>
					) : declined_requests.find((el) => el === userId) === userId ? (
						<h1 className='declined-req'>
							<p>Request Declined</p>
							<p>Feel free to try again Later</p>
						</h1>
					) : pending_requests.find((el) => el === userId) === userId ? (
						<h1 className='waiting-req'>
							<p>Request Pending</p>
							<p>You will be Notified once your Request is Accepted/Denied</p>
						</h1>
					) : status === 'unavailable' ? (
						<h1 className='waiting-req'>
							<p>User is Busy/Unavailable</p>
							<p>You will be Notified once the Expert is Available again</p>
						</h1>
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
