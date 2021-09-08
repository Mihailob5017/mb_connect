import React from 'react';
import './stage-counter.style.scss';
const StageCounter = ({ stage }) => {
	return (
		<div className='stage-count-wrapper'>
			<div className={`stage ${stage === 1 && 'active-stage'}`}></div>
			<div className={`stage ${stage === 2 && 'active-stage'}`}></div>
		</div>
	);
};

export default StageCounter;
