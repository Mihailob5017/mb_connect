import React, { useState } from 'react';
import SignUpRegular from './sign_up_regular';
import SignUpExpert from './sign_up_expert';
// React Router
import { useLocation } from 'react-router-dom';
const SignUp = () => {
	const location = useLocation();
	const type = location.pathname.split('/').pop();
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

	const handleStateChange = (name, value) => {
		setUser({ ...user, [name]: value });
	};

	return (
		<>
			{type === 'regular' ? (
				<SignUpRegular state={user} handleChange={handleStateChange} />
			) : (
				<SignUpExpert state={user} handleChange={handleStateChange} />
			)}
		</>
	);
};

export default SignUp;
