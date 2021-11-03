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
			key: 'full-stack-developer',
			text: 'Full stack Developer',
			value: 'full-stack-developer',
			group: 'development',
		},
		{
			key: 'mobile-developer',
			text: 'Mobile Developer',
			value: 'mobile-developer',
			group: 'development',
		},
		{
			key: 'game-developer',
			text: 'Game Developer',
			value: 'game-developer',
			group: 'development',
		},

		{
			key: 'web-designer',
			text: 'Web Designer',
			value: 'web-designer',
			group: 'design',
		},
		{
			key: 'ui-designer',
			text: 'UI Designer',
			value: 'ui-designer',
			group: 'design',
		},
		{
			key: 'ux-designer',
			text: 'UX Designer',
			value: 'ux-designer',
			group: 'design',
		},
		{
			key: 'animation-designer',
			text: 'Animation Designer',
			value: 'animation-designer',
			group: 'design',
		},
		{
			key: 'interior-designer',
			text: 'Interior Designer',
			value: 'interior-designer',
			group: 'design',
		},
		{
			key: 'industy-designer',
			text: 'Industy Designer',
			value: 'industry-designer',
			group: 'design',
		},
		{
			key: 'content-writer',
			text: 'Content Writer',
			value: 'content-writer',
			group: 'writing',
		},
		{
			key: 'ghost-writer',
			text: 'Ghost Writer',
			value: 'ghost-writer',
			group: 'writing',
		},
		{
			key: 'translator',
			text: 'Translator',
			value: 'translator',
			group: 'writing',
		},
		{
			key: 'editor',
			text: 'Editor',
			value: 'editor',
			group: 'writing',
		},
		{
			key: 'copywriter',
			text: 'Copywriter',
			value: 'copywriter',
			group: 'writing',
		},
		{
			key: 'creative-writer',
			text: 'Creative Writer',
			value: 'creative-writer',
			group: 'writing',
		},
		{
			key: 'virtual-support',
			text: 'Virtual Assistant',
			value: 'virtual-support',
			group: 'support',
		},
		{
			key: 'data-support',
			text: 'Data Entry Specialist',
			value: 'data-support',
			group: 'support',
		},
		{
			key: 'managment-support',
			text: ' Administration Support',
			value: 'managment-support',
			group: 'support',
		},
		{
			key: 'tech-support',
			text: 'Tech Support',
			value: 'tech-support',
			group: 'support',
		},
		{
			key: 'pr-support',
			text: 'Community Support',
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
			key: 'accountant',
			text: 'Accountant',
			value: 'accountant',
			group: 'accounting',
		},
		{
			key: 'financial-analyst',
			text: 'Financial Analyst',
			value: 'financial-analyst',
			group: 'accounting',
		},
		{
			key: 'interm-cfo',
			text: 'Interm Cfo',
			value: 'interm-cfo',
			group: 'accounting',
		},
		{
			key: 'tax-consultant',
			text: 'Tax Consultant',
			value: 'tax-consultant',
			group: 'accounting',
		},
		{
			key: 'bookkepper',
			text: 'Bookkepper',
			value: 'bookkeeper',
			group: 'accounting',
		},
		{
			key: 'sem-sepcialist',
			text: 'SEM Specialist',
			value: 'sem-sepcialist',
			group: 'sales',
		},
		{
			key: 'seo-sepcialist',
			text: 'SEO Specialist',
			value: 'seo-sepcialist',
			group: 'sales',
		},
		{
			key: 'social-sepcialist',
			text: 'Social Media Manager',
			value: 'social-sepcialist',
			group: 'sales',
		},
		{
			key: 'email-sepcialist',
			text: 'Email Marketer',
			value: 'email-sepcialist',
			group: 'sales',
		},
		{
			key: 'market-sepcialist',
			text: 'Market Analyst',
			value: 'market-sepcialist',
			group: 'sales',
		},
		{
			key: 'sales-sepcialist',
			text: 'Sales Representetive',
			value: 'sales-sepcialist',
			group: 'sales',
		},
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
