import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import root_reducer from './reducers/root.reducer';
import thunk from 'redux-thunk';

const middleware = [thunk];

export const Store = createStore(
	root_reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);
