import React from 'react';
import './log_in.style.scss';

// Components
import Logo from '../../images/cactus.svg';
const LogIn = () => {
	return (
		<div className='log-in-container'>
			<div className='log-in-greenscreen'>
				<h1>MB Connect is officialy live!</h1>
				<p>
					Mb Connect is an early enterprise level aplication for connecting
					different types of experts and their services to different users all
					across the globe.
				</p>
				<p>
					No more need to search through your local phone book,or to reach out
					to people to see if somebody knows somebody else.
				</p>
				<p>Whatever you need, you can find it here!</p>
			</div>
			{/* Will be replaced */}
			<div className='log-in-card-container'>
				<div className='log-in-card'>
					<div className='header-wrapper'>
						<img src={Logo} alt='cactus-logo' />
						<p>MB Connect</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
