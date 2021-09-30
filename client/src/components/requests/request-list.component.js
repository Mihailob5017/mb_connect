import React from 'react';
import './request.style.scss';
// Components
import Request from './request.component';

// Code
const RequestList = ({ request_users }) => {
	return (
		<div className='requests-container'>
			{request_users.map((element) => (
				<Request key={element._id} {...element} />
			))}
		</div>
	);
};

export default RequestList;
