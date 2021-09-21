import React from 'react';
import './expert.style.scss';

// Components
import Expert from './expert-single.component';

// Static Contnent
const staticExperts = [
	{
		id: '1',
		first_name: 'Mihailo',
		last_name: 'Boskovic',
		price: '50',
		title: 'Frontend Developer',
	},
	{
		id: '2',
		first_name: 'Ksenija',
		last_name: 'Imperl',
		price: '75',
		title: 'Industy Designer',
	},
	{
		id: '3',
		first_name: 'Nemanja',
		last_name: 'Stamenkovic',
		price: '25',
		title: 'Customer Support',
	},
	{
		id: '4',
		first_name: 'Sanela',
		last_name: 'Pavlovic',
		price: '30',
		title: 'PR Support',
	},
	{
		id: '5',
		first_name: 'Sabira',
		last_name: 'Malesevic',
		price: '90',
		title: 'Modern Artist',
	},
	{
		id: '6',
		first_name: 'Igor',
		last_name: 'Milojkovic',
		price: '5',
		title: 'Supplies Manager',
	},
	{
		id: '7',
		first_name: 'Jelisaveta',
		last_name: 'Vukovic',
		price: '40',
		title: 'Industry Manager',
	},
];

// Code
const ExpertList = () => {
	return (
		<div className='expert-list-wrapper'>
			{staticExperts.map((expert) => (
				<Expert {...expert} />
			))}
		</div>
	);
};

export default ExpertList;
