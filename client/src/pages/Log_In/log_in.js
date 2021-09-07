import React, { useState } from 'react';
import './log_in.style.scss';
// Logo
import Google from '../../images/google.svg';

// Components
import CardComponent from '../../components/card/card.component';
import InputComponent from '../../components/input/input.component';
import Button from '../../components/button/button.component';
import CardHeaderComponent from '../../components/card/card-header/card-header.component';

const LogIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<div className='log-in-container'>
			<div className='log-in-greenscreen'>
				<h1>MB Connect is officialy live!</h1>
				<p>
					Mb Connect is an early enterprise level aplication for connecting
					different types of experts and their services to different users all
					across the globe.
				</p>
				<p>
					No more need to search through your local phone book,or to reach out
					to people to see if somebody knows somebody else.
				</p>
				<p>Whatever you need, you can find it here!</p>
			</div>
			{/* Will be replaced by individual components*/}
			<div className='log-in-card-container'>
				{/* Header Component */}
				<CardComponent customClass='log-in-card'>
					<CardHeaderComponent />
					<h1 className='log-in-head'>Log in to your account</h1>
					{/* Google Button Component */}
					<button className='google-button-wrapper'>
						<div className='google-button'>
							<img src={Google} alt='google-button' />
						</div>

						<p>Log in with Google</p>
					</button>
					{/* Input Components */}
					<div className='or-wrapper'>
						<p>or</p>
					</div>

					<InputComponent
						type='email'
						name='email'
						value={email}
						handleChange={setEmail}
						label='Email Address'
					/>

					<InputComponent
						isPassword={true}
						type='password'
						name='password'
						value={password}
						handleChange={setPassword}
						label='Password'
					/>

					{/* Sign In Button */}
					<Button type='primary'>Sign In</Button>
					{/* Url Message */}
					<p className='switch-message'>
						Don't have an account? <label>Sign Here</label>
					</p>
				</CardComponent>
			</div>
		</div>
	);
};

export default LogIn;
