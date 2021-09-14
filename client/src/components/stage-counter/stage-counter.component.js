import React from 'react';
import { Link } from 'react-router-dom';
import './stage-counter.style.scss';
const StageCounter = ({ stage }) => {
	return (
		<div className='stage-count-wrapper'>
			{stage === 2 ? (
				<Link to='/'>
					<div className='stage passive-stage'></div>
				</Link>
			) : (
				<div className='stage active-stage'></div>
			)}

			<div className={`stage ${stage === 2 && 'active-stage'}`}></div>
		</div>
	);
};

export default StageCounter;
