import React from 'react';
import './request.style.scss';
// Components
import Request from './request.component';

// Redux
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => ({
	request_users: state.interact.pending_users,
});

export default connect(mapStateToProps)(RequestList);
