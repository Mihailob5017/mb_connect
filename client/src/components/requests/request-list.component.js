import React from 'react';
import './request.style.scss';
// Components
import Request from './request.component';
import NoResults from '../no-results/no-results.component';
// Redux
import { useDispatch } from 'react-redux';
import { acceptRequest, declineRequest } from '../../redux/actions/user.action';
// Code
const RequestList = ({ request_users, Id }) => {
	const primaryMsg = `Apologies, but you have no pending requests at this time`;
	const secondaryMsg = `However, feel free to log back in later and check to see if there are any new requests recieved!`;
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
			{request_users.length === 0 ? (
				<NoResults primaryMsg={primaryMsg} secondaryMsg={secondaryMsg} />
			) : (
				request_users.map((element) => (
					<Request
						key={element._id}
						acceptRequest={acceptRequestHandler}
						declineRequest={declineRequestHandler}
						{...element}
					/>
				))
			)}
		</div>
	);
};

export default RequestList;
