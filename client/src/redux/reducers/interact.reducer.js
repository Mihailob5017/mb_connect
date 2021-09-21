import {
	SET_SEARCH_NAME_PARAM,
	SET_SEARCH_TITLE_PARAM,
	SET_USER_TYPE,
} from '../types';

const INITIAL_STATE = {
	user_type: '',
	is_loged_in: false,
	options: [
		{ key: 'default', text: 'Service you Provide', value: '', group: 'none' },
		{
			key: 'frontend-developer',
			text: 'Frontend Developer',
			value: 'frontend-developer',
			group: 'development',
		},
		{
			key: 'backend-developer',
			text: 'Backend Developer',
			value: 'backend-developer',
			group: 'development',
		},
		{
			key: 'software-developer',
			text: 'Software Developer',
			value: 'software-developer',
			group: 'development',
		},
		{
			key: 'industy-designer',
			text: 'Industy Designer',
			value: 'industry-designer',
			group: 'design',
		},
		{
			key: 'ui-designer',
			text: 'UI/UX Designer',
			value: 'ui-designer',
			group: 'design',
		},
		{
			key: 'math-teacher',
			text: 'Math Teacher',
			value: 'math-teacher',
			group: 'education',
		},
		{
			key: 'english-teacher',
			text: 'English Teacher',
			value: 'english-teacher',
			group: 'education',
		},
		{
			key: 'tech-support',
			text: 'Technical Support',
			value: 'tech-support',
			group: 'support',
		},
		{
			key: 'pr-support',
			text: 'PR Support',
			value: 'pr-support',
			group: 'support',
		},
		{
			key: 'customer-support',
			text: 'Customer Support',
			value: 'customer-support',
			group: 'support',
		},
		{
			key: 'abstract-art',
			text: 'Abstract Artist',
			value: 'abstract-art',
			group: 'art',
		},
		{
			key: 'modern-art',
			text: 'Modern Artist',
			value: 'modern-art',
			group: 'art',
		},
		{
			key: 'client-managmer',
			text: 'Client Manager',
			value: 'client-manager',
			group: 'sales',
		},
		{ key: 'salesman', text: 'Salesman', value: 'salesman', group: 'sales' },
	],
	search_param_name: '',
	search_param_title: '',
	experts: [
		{
			id: '1',
			first_name: 'Mihailo',
			last_name: 'Boskovic',
			price: '50',
			title: 'Frontend Developer',
			type: 'frontend-developer',
		},
		{
			id: '2',
			first_name: 'Ksenija',
			last_name: 'Imperl',
			price: '75',
			title: 'Industy Designer',
			type: 'industry-designer',
		},
		{
			id: '3',
			first_name: 'Nemanja',
			last_name: 'Stamenkovic',
			price: '25',
			title: 'Customer Support',
			type: 'customer-support',
		},
		{
			id: '4',
			first_name: 'Sanela',
			last_name: 'Pavlovic',
			price: '30',
			title: 'PR Support',
			type: 'pr-support',
		},
		{
			id: '5',
			first_name: 'Sabira',
			last_name: 'Malesevic',
			price: '90',
			title: 'Modern Artist',
			type: 'modern-art',
		},
		{
			id: '6',
			first_name: 'Igor',
			last_name: 'Milojkovic',
			price: '5',
			title: 'Salesman',
			type: 'salesman',
		},
		{
			id: '7',
			first_name: 'Jelisaveta',
			last_name: 'Vukovic',
			price: '40',
			title: 'Client Manager',
			type: 'client-manager',
		},
	],
};

const interactReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_USER_TYPE:
			return { ...state, is_loged_in: true, user_type: action.payload };
		case SET_SEARCH_NAME_PARAM:
			return { ...state, search_param_name: action.payload };
		case SET_SEARCH_TITLE_PARAM:
			return { ...state, search_param_title: action.payload };

		default:
			return state;
	}
};
export default interactReducer;
