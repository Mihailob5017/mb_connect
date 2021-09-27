import React from 'react';
import './request.style.scss';
// Components
import Request from './request.component';
// Code
const requests = [
	{
		first_name: 'Mihailo',
		last_name: 'Boskovic',
		profile_pic: '',
	},
	{
		first_name: 'Marko',
		last_name: 'Hrnjak',
		profile_pic: '',
	},
	{
		first_name: 'Jovan ',
		last_name: 'Stevanovic',
		profile_pic: '',
	},
	{
		first_name: 'Aleksa',
		last_name: 'Gilisic',
		profile_pic: '',
	},
	{
		first_name: 'Borivoje',
		last_name: 'Spalevic',
		profile_pic: '',
	},
];

const RequestList = () => {
	return (
		<div className='requests-container'>
			{requests.map((element) => (
				<Request id={element._id} {...element} />
			))}
		</div>
	);
};
//
export default RequestList;
