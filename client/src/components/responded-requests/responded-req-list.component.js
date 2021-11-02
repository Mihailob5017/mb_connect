import React from 'react';
import './responded-req.style.scss';
// Redux
import { useDispatch } from 'react-redux';
import { removeConnection } from '../../redux/actions/user.action';
// Componentts
import NoResults from '../no-results/no-results.component';
import Response from './responded-req.component';
import Loading from '../loading/loading.component';
// Code
const ResponseList = ({ header, user_list, accepted, id, loading }) => {
	const dispatch = useDispatch();
	const primaryMsg =
		accepted === true ? `No new connections` : `No new declined requests`;
	const secondaryMsg =
		accepted === true
			? `If you feel like taking on new challanges, click the "Accept" button from the Pending Requests Column`
			: `If you don't feel like working with a specific person or working on a new request, click the "Decline" button from the Pending Requests column`;
	const removeConnectionHandler = (userId) => {
		dispatch(
			removeConnection(id, userId, accepted === true ? 'accepted' : 'declined')
		);
	};

	return (
		<div className='response-container'>
			<h1 className='response-header'>{header}</h1>

			{loading === true ? (
				<Loading />
			) : user_list.length === 0 ? (
				<NoResults
					includesImg={false}
					primaryMsg={primaryMsg}
					secondaryMsg={secondaryMsg}
				/>
			) : (
				user_list.map((element, i) => (
					<Response
						key={i}
						accepted={accepted}
						removeConnectionHandler={removeConnectionHandler}
						{...element}
					/>
				))
			)}
		</div>
	);
};

export default ResponseList;
