import React, { useState } from 'react';
import './sign_up.style.scss';
import Upload from '../../images/upload.svg';
import FileBase from 'react-file-base64';
// Components
import GreenScreen from '../../components/green-screen/green-screen.component';
import CardComponent from '../../components/card/card.component';
import CardHeader from '../../components/card/card-header/card-header.component';
import InputComponent from '../../components/input/input.component';
import Button from '../../components/button/button.component';
import StageCounter from '../../components/stage-counter/stage-counter.component';
const SignUpComponent = ({ state, handleChange }) => {
	const [uploadBtnText, setUploadBtnText] = useState(
		'Upload a Profile Picture'
	);
	return (
		<div className='sign-up-container '>
			<GreenScreen reduced={true} />
			<CardComponent customClass='sign-up-card'>
				<div className='sign-up-column'>
					<CardHeader /> <h1 className='sign-up-head'>Create your Account</h1>
					<InputComponent
						value={state.email}
						handleChange={handleChange}
						type='email'
						name='email'
						label='Email Address'
					/>
					<InputComponent
						value={state.first_name}
						handleChange={handleChange}
						name='first_name'
						label='First Name'
					/>
					<InputComponent
						value={state.last_name}
						handleChange={handleChange}
						name='last_name'
						label='Last Name'
					/>
					<InputComponent
						value={state.address}
						handleChange={handleChange}
						name='address'
						label='Address'
					/>
					<InputComponent
						vallue={state.phone_number}
						handleChange={handleChange}
						name='phone'
						label='Phone Number'
					/>
				</div>

				<div className='sign-up-column'>
					<div className='empty-space'></div>
					<InputComponent
						value={state.password}
						handleChange={handleChange}
						isPassword={true}
						type='password'
						name='password'
						label='Password'
					/>
					<InputComponent
						value={state.repeat_password}
						handleChange={handleChange}
						isPassword={true}
						type='password'
						name='repeat_password'
						label='Repeat Password'
					/>
					<div className='upload-wrapper'>
						<FileBase
							type='file'
							multiple={false}
							onDone={({ base64 }) => {
								handleChange('profile_pic', base64);
								setUploadBtnText('Image Selected');
							}}
						/>
						<img src={Upload} alt='Upload' />
						<p>{uploadBtnText}</p>
					</div>
					<p className='sign-up-text'>
						Make sure you to check if all the parameters that you entered are
						correct, since you won’t be able to change them once the profile is
						created
					</p>
					<Button type='primary'>Create Profile</Button>
					<StageCounter stage={2} />
				</div>
			</CardComponent>
		</div>
	);
};

export default SignUpComponent;
