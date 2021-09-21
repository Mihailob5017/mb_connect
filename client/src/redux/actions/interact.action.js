import {
	SET_SEARCH_NAME_PARAM,
	SET_SEARCH_TITLE_PARAM,
	SET_USER_TYPE,
} from '../types';

export const setUserType = (type) => ({ type: SET_USER_TYPE, payload: type });

export const setSearchParamTitle = (value) => ({
	type: SET_SEARCH_TITLE_PARAM,
	payload: value,
});

export const setSearchParamName = (value) => ({
	type: SET_SEARCH_NAME_PARAM,
	payload: value,
});
