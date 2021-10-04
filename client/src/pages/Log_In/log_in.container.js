import React, { useState } from 'react';
import LoginPage from './log_in';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/actions/user.action';
import { useHistory } from 'react-router';
const LogIn = () => {
	const dispatch = useDispatch();

	const [body, setBody] = useState({
		email: '',
		password: '',
	});
	const history = useHistory();
	const handleStateChange = (name, value) => {
		setBody({ ...body, [name]: value });
	};
	const handleSubmit = (isAuthByGoogle, googleEmail) => {
		if (isAuthByGoogle === true)
			dispatch(
				logIn(
					{
						password: body.password,
						email: googleEmail,
						isAuthByGoogle: isAuthByGoogle !== true ? false : true,
					},
					history
				)
			);
		else
			dispatch(
				logIn(
					{
						...body,
						isAuthByGoogle: isAuthByGoogle !== true ? false : true,
					},
					history
				)
			);
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
