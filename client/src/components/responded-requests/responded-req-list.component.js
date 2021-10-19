import React from 'react';
import './responded-req.style.scss';
import Response from './responded-req.component';
const ResponseList = ({ header, user_list, accepted }) => {
	return (
		<div className='response-container'>
			<h1 className='response-header'>{header}</h1>
			{user_list.map((element) => (
				<Response key={element._id} accepted={accepted} {...element} />
			))}
		</div>
	);
};

export default ResponseList;
