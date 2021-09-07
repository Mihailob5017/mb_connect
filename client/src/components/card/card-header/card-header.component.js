import React from 'react';
import Logo from '../../../images/cactus.svg';
import './card-header.style.scss';

const CardHeaderComponent = () => {
	return (
		<div className='header-logo-wrapper'>
			<img src={Logo} alt='cactus-logo' />
			<p>MB Connect</p>
		</div>
	);
};

export default CardHeaderComponent;
