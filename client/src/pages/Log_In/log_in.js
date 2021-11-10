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
			<div className='log-in-card-container'>
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
							<div className='input-container'>
								<InputComponent
									type='email'
									name='email'
									value={state.email}
									handleChange={handleChange}
									customClass='input-small wide-input'
									label='Email Address'
								/>

								<InputComponent
									isPassword={true}
									type='password'
									name='password'
									value={state.password}
									handleChange={handleChange}
									customClass='input-small  wide-input'
									label='Password'
								/>
							</div>
							{/* Sign In Button */}
							<Button handleClick={handleSubmit} type='primary'>
								Sign In
							</Button>
						</>
					) : (
						<>
							<h1 className='log-in-head'>Create your Account</h1>
							<p className='log-in-text'>
								First thing's first, you have to specify will you be a{' '}
								<label>Regular</label> or a <label>Premium</label> user. Note
								that this can not be changed later, you will have to make a new
								account if you want to do so.
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
								<label>Regular user</label> - You are in need of a expert for
								hire to help you with a service of a specific kind. Wheater it's
								a Graphic Designer, an IT consultant or a Sales Representetive
								for your company.
							</p>
							<p className='log-in-text'>
								<label>Expert user</label> - You have this amazing knowlage in a
								specific area and you are looking to make some money with it.
								Here you will be able to create an account and display yoursel
								in front of countless of users that can and will reach out to
								you.
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
