import {
	SET_SEARCH_NAME_PARAM,
	SET_SEARCH_TITLE_PARAM,
	SET_USER_TYPE,
	GET_ALL_EXPERTS,
	GET_ALL_REQUESTS,
	CONNECT_TO_EXPERT,
	ACCEPT_REQUEST,
	DECLINE_REQUEST,
	REMOVE_ACCEPTED_REQUEST,
	REMOVE_DECLINED_REQUEST,
} from '../types';
import { filterPendingUsers } from '../../helpers/index';
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
			text: 'UI Designer',
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
			key: 'technical-support',
			text: 'Technical Support',
			value: 'technical-support',
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
			value: 'abstract-artist',
			group: 'art',
		},
		{
			key: 'modern-art',
			text: 'Modern Artist',
			value: 'modern-artist',
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
	experts: [],
	experts_loading: true,
	pending_users: [],
	pending_users_loading: true,
	accepted_users: [],
	accepted_users_loading: true,
	declined_users: [],
	declined_users_loading: true,
};

const interactReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_USER_TYPE:
			return { ...state, is_loged_in: true, user_type: action.payload };
		case SET_SEARCH_NAME_PARAM:
			return { ...state, search_param_name: action.payload };
		case SET_SEARCH_TITLE_PARAM:
			return { ...state, search_param_title: action.payload };
		case GET_ALL_EXPERTS:
			return { ...state, experts: action.payload, experts_loading: false };
		case GET_ALL_REQUESTS:
			return {
				...state,
				pending_users: [...action.payload.pendingUsers],
				pending_users_loading: false,
				accepted_users: [...action.payload.acceptedUsers],
				accepted_users_loading: false,
				declined_users: [...action.payload.declinedUsers],
				declined_users_loading: false,
			};
		case CONNECT_TO_EXPERT: {
			return {
				...state,
				experts: action.payload.experts,
			};
		}

		case ACCEPT_REQUEST:
			return {
				...state,
				pending_users: filterPendingUsers(
					state.pending_users,
					action.payload.removedUserId
				),
				accepted_users: [...state.accepted_users, action.payload.removedUser],
			};
		case DECLINE_REQUEST:
			return {
				...state,
				pending_users: filterPendingUsers(
					state.pending_users,
					action.payload.removedUserId
				),
				declined_users: [...state.declined_users, action.payload.removedUser],
			};
		case REMOVE_ACCEPTED_REQUEST:
			return {
				...state,
				accepted_users: state.accepted_users.filter(
					(el) => el._id !== action.payload
				),
			};

		case REMOVE_DECLINED_REQUEST:
			return {
				...state,
				declined_users: state.declined_users.filter((el) => {
					return el._id !== action.payload;
				}),
			};

		default:
			return state;
	}
};
export default interactReducer;
