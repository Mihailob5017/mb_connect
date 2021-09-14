import { SIGN_UP_START, SIGN_UP_FAILURE, SIGN_UP_SUCCESS } from '../types';
import * as api from '../../api/index.api';

export const signUp = (user) => async (dispatch) => {
	dispatch({ type: SIGN_UP_START });

	try {
		// If the passwords don't match, exist before making the api call
		if (user.password !== user.repeat_password) {
			dispatch({ type: SIGN_UP_FAILURE, payload: 'Passwords Dont Match' });
			return;
		}
		// Waiting for the results
		const { data } = await api.SignUp(user);
		dispatch({
			type: SIGN_UP_SUCCESS,
			payload: {
				user: data.result,
				status: data.is_successfull,
				message: data.message,
			},
		});
	} catch (error) {
		dispatch({ type: SIGN_UP_FAILURE, payload: error });
	}
};
