import {
	GET_ALL_EXPERTS,
	GET_ALL_REQUESTS,
	SET_SEARCH_NAME_PARAM,
	SET_SEARCH_TITLE_PARAM,
	SET_USER_TYPE,
} from '../types';
import * as api from '../../api/index.api';

export const setUserType = (type) => ({ type: SET_USER_TYPE, payload: type });

export const setSearchParamTitle = (value) => ({
	type: SET_SEARCH_TITLE_PARAM,
	payload: value,
});

export const setSearchParamName = (value) => ({
	type: SET_SEARCH_NAME_PARAM,
	payload: value,
});

export const getAllExperts = () => async (dispatch) => {
	try {
		const { data } = await api.getExperts();
		dispatch({ type: GET_ALL_EXPERTS, payload: data });
	} catch (error) {
		console.error(error);
	}
};

export const getAllRequests = (obj) => async (dispatch) => {
	try {
		const { data } = await api.getAllUsers(obj);
		console.log(data.allUsers);
		dispatch({ type: GET_ALL_REQUESTS, payload: data.allUsers });
	} catch (error) {
		console.error(error);
	}
};
