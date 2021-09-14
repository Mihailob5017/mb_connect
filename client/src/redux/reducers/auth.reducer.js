import { SIGN_UP_FAILURE, SIGN_UP_START, SIGN_UP_SUCCESS } from '../types';

const INITIAL_STATE = {
	user: null, //User Object
	signUp_status: null, //Boolean -> user managed to sign up
	logIn_status: null, // Boolean -> user managed to log in
	error: null, // Any Occuring Error
	message: null, // Success Message
};

const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_UP_START:
			return state;
		case SIGN_UP_SUCCESS:
			return {
				...state,
				user: action.payload.user,
				signUp_status: true,
				message: 'Account Successfully created',
			};
		case SIGN_UP_FAILURE:
			return {
				...state,
				signUp_status: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default authReducer;
