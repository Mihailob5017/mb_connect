import React from 'react';
import SignUpRegular from './sign_up_regular';
import SignUpExpert from './sign_up_expert';
// React Router
import { useLocation } from 'react-router-dom';
const SignUp = () => {
	const location = useLocation();
	const type = location.pathname.split('/').pop();
	return <>{type === 'regular' ? <SignUpRegular /> : <SignUpExpert />}</>;
};

export default SignUp;
