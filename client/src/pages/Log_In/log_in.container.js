import React, { useState } from 'react';
import LoginPage from './log_in';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/actions/auth.action';
const LogIn = () => {
	const dispatch = useDispatch();

	const [body, setBody] = useState({
		email: '',
		password: '',
	});
	const handleStateChange = (name, value) => {
		setBody({ ...body, [name]: value });
	};
	const handleSubmit = () => {
		dispatch(logIn(body));
	};

	return (
		<LoginPage
			state={body}
			handleChange={handleStateChange}
			handleSubmit={handleSubmit}
		/>
	);
};

export default LogIn;
