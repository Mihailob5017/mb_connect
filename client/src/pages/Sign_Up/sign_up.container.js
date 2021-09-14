import React, { useState } from 'react';
import SignUpRegular from './sign_up_regular';
import SignUpExpert from './sign_up_expert';
// React Router
import { useLocation } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/actions/auth.action';

//
const SignUp = () => {
	// Redux
	const dispatch = useDispatch();
	// URL Location
	const location = useLocation();
	const type = location.pathname.split('/').pop();
	// State
	const [user, setUser] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		repeat_password: '',
		is_regular: type === 'regular' ? true : false,
		profile_pic: '',
		address: '',
		phone_number: '',
		about_me: '',
		service: '',
	});
	// State Handler
	const handleStateChange = (name, value) => {
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = () => {
		console.log(user);
		console.log('------------');
		dispatch(signUp(user));
	};

	return (
		<>
			{type === 'regular' ? (
				<SignUpRegular
					handleSubmit={handleSubmit}
					state={user}
					handleChange={handleStateChange}
				/>
			) : (
				<SignUpExpert
					handleSubmit={handleSubmit}
					state={user}
					handleChange={handleStateChange}
				/>
			)}
		</>
	);
};

export default SignUp;
