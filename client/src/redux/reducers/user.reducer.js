import {
	ACCEPT_REQUEST,
	CONNECT_TO_EXPERT,
	CONNECT_WITH_EXPERT,
	LOG_IN_FAILURE,
	LOG_IN_START,
	LOG_IN_SUCCESS,
	SIGN_UP_FAILURE,
	SIGN_UP_START,
	SIGN_UP_SUCCESS,
} from '../types';

const INITIAL_STATE = {
	user: null, //User Object
	sign_status: null, //Boolean -> user managed to sign up
	error: null, // Any Occuring Error
	message: null, // Success Message
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		// SIGN UP PROCCESS
		case SIGN_UP_START:
		case LOG_IN_START:
			return state;
		case LOG_IN_SUCCESS:
		case SIGN_UP_SUCCESS:
			return {
				...state,
				user: action.payload.user,
				sign_status: true,
				message: action.payload.message,
			};
		case SIGN_UP_FAILURE:
		case LOG_IN_FAILURE:
			return {
				...state,
				sign_status: false,
				error: action.payload,
			};

		case CONNECT_TO_EXPERT:
			return {
				...state,
				user: action.payload.user,
			};
		case ACCEPT_REQUEST:
			return { ...state, user: action.payload.updatedUser };

		default:
			return state;
	}
};

export default userReducer;
