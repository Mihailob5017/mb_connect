import React from 'react';
import SignUpComponent from './sign_up';
// React Router
import { useLocation } from 'react-router-dom';
const SignUp = () => {
	const location = useLocation();

	return (
		<>
			<SignUpComponent type={location.pathname.split('/').pop()} />
		</>
	);
};

export default SignUp;
