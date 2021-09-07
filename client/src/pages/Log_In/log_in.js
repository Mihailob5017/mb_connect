import React from 'react';
import './log_in.style.scss';
// Components
import Logo from '../../images/cactus.svg';
import Google from '../../images/google.svg';
const LogIn = () => {
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
				<div className='log-in-card'>
					<div className='header-logo-wrapper'>
						<img src={Logo} alt='cactus-logo' />
						<p>MB Connect</p>
					</div>
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

					<div className='input-wrapper'>
						<label>Email Address</label>
						<input type='email' />
					</div>

					<div className='input-wrapper'>
						<label>Password</label>
						<input type='password' />
						<button>show</button>
					</div>
					{/* Sign In Button */}
					<button className='action-button-primary'>Sign In</button>
					{/* Url Message */}
					<p className='switch-message'>
						Don't have an account? <label>Sign Here</label>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LogIn;
