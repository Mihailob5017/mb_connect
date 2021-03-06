import React from 'react';
import './App.scss';

// React Router Dom
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import LogIn from './pages/Log_In/log_in.container';
import SignUp from './pages/Sign_Up/sign_up.container';
import Homepage from './pages/Home/home.container';
const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Homepage} />
				<Route path='/auth' exact component={LogIn} />
				<Route path='/auth/signup' component={SignUp} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
