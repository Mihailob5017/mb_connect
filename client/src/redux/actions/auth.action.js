import {
	SIGN_UP_START,
	SIGN_UP_FAILURE,
	SIGN_UP_SUCCESS,
	LOG_IN_FAILURE,
	LOG_IN_START,
	LOG_IN_SUCCESS,
} from '../types';
import * as api from '../../api/index.api';

export const signUp = (user) => async (dispatch) => {
	dispatch({ type: SIGN_UP_START });

	try {
		// If the passwords don't match, exist before making the api call
		if (user.password !== user.repeat_password) {
			dispatch({ type: SIGN_UP_FAILURE, payload: 'Passwords Dont Match' });
			// Replace with function that alerts the user about the error
			return;
		}
		// Waiting for the results
		const { data } = await api.SignUp(user);
		const { is_successfull, result, message } = data;
		// Check for any backend errors
		if (is_successfull === false) {
			dispatch({ type: SIGN_UP_FAILURE, payload: message });
			// Replace with function that alerts the user about the error
			return;
		} else {
			dispatch({ type: SIGN_UP_SUCCESS, payload: { user: result, message } });
			// Replace with function that alerts the user about the error
			return;
		}
		// Catch Server Errors
	} catch (error) {
		dispatch({ type: SIGN_UP_FAILURE, payload: error });
		// Replace with function that alerts the user about the error
		return;
	}
};

export const logIn = (body) => async (dispatch) => {
	dispatch({ type: LOG_IN_START });
	try {
		const { data } = await api.LogIn(body);
		const { is_successfull, result, message } = data;
		if (is_successfull === false) {
			dispatch({ type: LOG_IN_FAILURE, payload: message });
			// Replace with function that alerts the user about the error
			return;
		} else {
			dispatch({ type: LOG_IN_SUCCESS, payload: { user: result, message } });
			// Replace with function that alerts the user about the error
			return;
		}
	} catch (error) {
		dispatch({ type: LOG_IN_FAILURE, payload: error });
		// Replace with function that alerts the user about the error
		return;
	}
};
