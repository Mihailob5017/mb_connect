import React from 'react';
import './request.style.scss';
// Components
import Request from './request.component';
// Redux
import { useDispatch } from 'react-redux';
import { acceptRequest, declineRequest } from '../../redux/actions/user.action';
// Code
const RequestList = ({ request_users, Id }) => {
	const dispatch = useDispatch();

	const acceptRequestHandler = (usersId) => {
		dispatch(acceptRequest(Id, usersId));
	};
	const declineRequestHandler = (usersId) => {
		dispatch(declineRequest(Id, usersId));
	};

	return (
		<div className='requests-container'>
			<h1 className='request-header'>Pending Requests</h1>
			{request_users.map((element) => (
				<Request
					key={element._id}
					acceptRequest={acceptRequestHandler}
					declineRequest={declineRequestHandler}
					{...element}
				/>
			))}
		</div>
	);
};

export default RequestList;
