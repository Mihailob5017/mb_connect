import { combineReducers } from 'redux';

// Reducer used for sign up and sign in
import auth_reducer from './auth.reducer';

export default combineReducers({ auth: auth_reducer });
