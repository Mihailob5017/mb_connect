import React, { useState } from 'react';
import './log_in.style.scss';
// Logo
import Google from '../../images/google.svg';

// Components
import CardComponent from '../../components/card/card.component';
import InputComponent from '../../components/input/input.component';
// React Router
import { Link } from 'react-router-dom';
// Google Button
import { GoogleLogin } from 'react-google-login';

import Button from '../../components/button/button.component';
import CardHeaderComponent from '../../components/card/card-header/card-header.component';
import GreenScreen from '../../components/green-screen/green-screen.component';
import StageCounter from '../../components/stage-counter/stage-counter.component';

const LogIn = ({ handleChange, handleSubmit, state }) => {
	// State
	const [isLogIn, setLogIn] = useState(true);
	const [isRegularUser, setRegularUser] = useState(true);

	// Function Handlers
	const handleLogin = () => setLogIn(!isLogIn);
	// Google Handlers
	const onGoogleSuccess = (res) => {
		const { profileObj } = res;
		const { email } = profileObj;
		handleChange('email', email);
		handleSubmit(true, email);
	};
	const onGoogleFailure = (res) => {
		console.log(res);
		alert('Something went Wrong while Logging In');
	};

	return (
		<div className='log-in-container'>
			<GreenScreen />
			{/* Will be replaced by individual components*/}
			<div className='log-in-card-container'>
				{/* Header Component */}
				<CardComponent customClass='log-in-card'>
					<CardHeaderComponent />
					{isLogIn ? (
						<>
							<h1 className='log-in-head'>Log in to your account</h1>
							{/* Google Button Component */}

							<GoogleLogin
								clientId='750291484607-rjottldigank2iurt9i74jpgspdubki1.apps.googleusercontent.com'
								onSuccess={onGoogleSuccess}
								onFailure={onGoogleFailure}
								render={(renderProps) => {
									return (
										<button
											disabled={renderProps.disabled}
											onClick={renderProps.onClick}
											className='google-button-wrapper'
										>
											<div className='google-button'>
												<img src={Google} alt='google-button' />
											</div>

											<p>Log in with Google</p>
										</button>
									);
								}}
							/>

							{/* Input Components */}
							<div className='or-wrapper'>
								<p>or</p>
							</div>

							<InputComponent
								type='email'
								name='email'
								value={state.email}
								handleChange={handleChange}
								label='Email Address'
							/>

							<InputComponent
								isPassword={true}
								type='password'
								name='password'
								value={state.password}
								handleChange={handleChange}
								label='Password'
							/>

							{/* Sign In Button */}
							<Button handleClick={handleSubmit} type='primary'>
								Sign In
							</Button>
						</>
					) : (
						<>
							<h1 className='log-in-head'>Create your Account</h1>
							<p className='log-in-text'>
								Please choose what type of user are you.Warning this cannot be
								changed later.
							</p>
							<div className='button-switch-container'>
								<button
									className={`button-switch ${isRegularUser && 'selected-btn'}`}
									onClick={() => setRegularUser(true)}
								>
									Regular
								</button>
								<button
									className={`button-switch ${
										isRegularUser === false && 'selected-btn'
									}`}
									onClick={() => setRegularUser(false)}
								>
									Expert
								</button>
							</div>
							<p className='log-in-text'>
								Regular users are the one who are in need for a expert in a
								certan domain.
							</p>
							<p className='log-in-text'>
								Expert users are the providers for a certan type of service and
								they are being contacted by regular users.
							</p>
							{/* Proceed Step */}
							<Link to={`/auth/signup/${isRegularUser ? 'regular' : 'expert'}`}>
								<Button type='primary'>Select</Button>
							</Link>
							<StageCounter stage={1} />
						</>
					)}

					{/* Url Message */}
					<p className='switch-message'>
						{isLogIn ? `Don't have an account? ` : `Already have an account? `}

						<label onClick={handleLogin}>
							{isLogIn ? `Sign Up` : `Log In`}
						</label>
					</p>
				</CardComponent>
			</div>
		</div>
	);
};

export default LogIn;
