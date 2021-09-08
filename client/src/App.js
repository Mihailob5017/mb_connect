import React from 'react';
import './App.scss';

// React Router Dom
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import LogIn from './pages/Log_In/log_in.container';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={LogIn} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
