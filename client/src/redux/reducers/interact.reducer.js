import { SET_USER_TYPE } from '../types';

const INITIAL_STATE = {
	user_type: '',
	is_loged_in: false,
};

const interactReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_USER_TYPE:
			return { ...state, is_loged_in: true, user_type: action.payload };

		default:
			return state;
	}
};
export default interactReducer;
