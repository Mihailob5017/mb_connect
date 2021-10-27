import React from 'react';
import './responded-req.style.scss';
// Redux
import { useDispatch } from 'react-redux';
import { removeConnection } from '../../redux/actions/user.action';
// Componentts
import Response from './responded-req.component';
// Code
const ResponseList = ({ header, user_list, accepted, id }) => {
	const dispatch = useDispatch();

	const removeConnectionHandler = (userId) => {
		dispatch(
			removeConnection(id, userId, accepted === true ? 'accepted' : 'declined')
		);
	};

	return (
		<div className='response-container'>
			<h1 className='response-header'>{header}</h1>
			{user_list.map((element, i) => (
				<Response
					key={i}
					accepted={accepted}
					removeConnectionHandler={removeConnectionHandler}
					{...element}
				/>
			))}
		</div>
	);
};

export default ResponseList;
