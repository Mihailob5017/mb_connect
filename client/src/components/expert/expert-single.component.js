import React from 'react';
import './expert.style.scss';
// Images
import ConnectSVG from '../../images/link_white.svg';
import ProfileSVG from '../../images/user_white.svg';

const Expert = ({ id, first_name, last_name, price, title, image = '' }) => {
	return (
		<div id={id} className='expert-container'>
			<div className='image-placeholder'>
				<h1>
					{first_name.charAt(0).toUpperCase() +
						last_name.charAt(0).toUpperCase()}
				</h1>
			</div>
			<div className='expert-content'>
				<div className='main-info'>
					<h1>{first_name + ' ' + last_name}</h1>
					<h1>${price}</h1>
				</div>
				<p>{title}</p>
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
