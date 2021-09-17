import { combineReducers } from 'redux';

// Reducer used for sign up and sign in
import auth_reducer from './auth.reducer';
import interactReducer from './interact.reducer';

export default combineReducers({
	auth: auth_reducer,
	interact: interactReducer,
});
