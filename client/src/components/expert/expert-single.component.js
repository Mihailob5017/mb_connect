import React from 'react';
import './expert.style.scss';
// Helper
import { restructureServiceName } from '../../helpers/index';
// Images
import ConnectSVG from '../../images/link_white.svg';
import ProfileSVG from '../../images/user_white.svg';

const Expert = ({
	_id,
	first_name,
	last_name,
	service,
	price,
	profile_pic,
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
					<button className='expert-button'>
						<img src={ConnectSVG} alt='Connect' />
						<p>Connect</p>
					</button>
					<button className='expert-button'>
						<img src={ProfileSVG} alt='Profile' />
						<p>Profile</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Expert;
