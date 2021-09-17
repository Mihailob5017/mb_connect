import {
	SIGN_UP_START,
	SIGN_UP_FAILURE,
	SIGN_UP_SUCCESS,
	LOG_IN_FAILURE,
	LOG_IN_START,
	LOG_IN_SUCCESS,
	SET_USER_TYPE,
} from '../types';

import * as api from '../../api/index.api';

// import { setUserType } from './interact.action';
export const signUp = (user, history) => async (dispatch) => {
	dispatch({ type: SIGN_UP_START });

	try {
		// If the passwords don't match, exist before making the api call
		if (user.password !== user.repeat_password) {
			dispatch({ type: SIGN_UP_FAILURE, payload: 'Passwords Dont Match' });
			alert('Password Mismatch');
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
			alert(message);
			return;
		} else {
			dispatch({ type: SIGN_UP_SUCCESS, payload: { user: result, message } });
			// Replace with function that alerts the user about the error
			dispatch({
				type: SET_USER_TYPE,
				payload: result.is_regular ? 'regular' : 'expert',
			});
			history.goBack();
			history.goBack();
			return;
		}
		// Catch Server Errors
	} catch (error) {
		dispatch({ type: SIGN_UP_FAILURE, payload: error });
		alert('Server Error');
		// Replace with function that alerts the user about the error
		return;
	}
};

export const logIn = (body, history) => async (dispatch) => {
	dispatch({ type: LOG_IN_START });
	try {
		const { data } = await api.LogIn(body);
		const { is_successfull, result, message } = data;
		if (is_successfull === false) {
			dispatch({ type: LOG_IN_FAILURE, payload: message });
			// Replace with function that alerts the user about the error
			alert(message);
			return;
		} else {
			dispatch({ type: LOG_IN_SUCCESS, payload: { user: result, message } });
			dispatch({
				type: SET_USER_TYPE,
				payload: result.is_regular ? 'regular' : 'expert',
			});
			history.goBack();
			// Replace with function that alerts the user about the error
			return;
		}
	} catch (error) {
		dispatch({ type: LOG_IN_FAILURE, payload: error });
		alert('Server Error');
		// Replace with function that alerts the user about the error
		return;
	}
};
