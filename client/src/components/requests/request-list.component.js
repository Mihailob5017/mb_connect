import React from 'react';
import './request.style.scss';
// Components
import Request from './request.component';
// Redux
import { useDispatch } from 'react-redux';
import { acceptRequest } from '../../redux/actions/user.action';
// Code
const RequestList = ({ request_users, Id }) => {
	const dispatch = useDispatch();

	const acceptRequestHandler = (usersId) => {
		dispatch(acceptRequest(Id, usersId));
	};

	return (
		<div className='requests-container'>
			{request_users.map((element) => (
				<Request
					key={element._id}
					acceptRequest={acceptRequestHandler}
					{...element}
				/>
			))}
		</div>
	);
};

export default RequestList;
