import React, { useState } from 'react';
import SignUpRegular from './sign_up_regular';
import SignUpExpert from './sign_up_expert';
// React Router
import { useLocation, useHistory } from 'react-router-dom';
// Redux
import { useDispatch, connect } from 'react-redux';
import { signUp } from '../../redux/actions/auth.action';

//
const SignUp = ({ options }) => {
	// Redux
	const dispatch = useDispatch();
	// URL Location
	const location = useLocation();
	const history = useHistory();
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
		price: 50,
	});
	// State Handler
	const handleStateChange = (name, value) => {
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = () => {
		dispatch(signUp(user, history));
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
					options={options}
					handleSubmit={handleSubmit}
					state={user}
					handleChange={handleStateChange}
				/>
			)}
		</>
	);
};
const mapStateToProps = (state) => ({ options: state.interact.options });

export default connect(mapStateToProps)(SignUp);
