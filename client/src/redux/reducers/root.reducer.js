import { combineReducers } from 'redux';

// Reducer used for sign up and sign in
import user_reducer from './user.reducer';
import interactReducer from './interact.reducer';

export default combineReducers({
	user: user_reducer,
	interact: interactReducer,
});
