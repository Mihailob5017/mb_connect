import React from 'react';
import './no-results.style.scss';
// SVG
import SadMonitor from '../../images/sad-monitor.svg';
// Code
const NoResults = ({ includesImg = true, primaryMsg, secondaryMsg }) => {
	return (
		<div className='no-res-container'>
			{includesImg === true && <img src={SadMonitor} alt='sad-monitor' />}
			<h1>{primaryMsg}</h1>
			<p>{secondaryMsg}</p>
		</div>
	);
};

export default NoResults;
