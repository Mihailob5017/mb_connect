import React, { useState } from 'react';
import './sign_up.style.scss';
import Upload from '../../images/upload.svg';
import FileBase from 'react-file-base64';
// Components
import CardHeader from '../../components/card/card-header/card-header.component';
import InputComponent from '../../components/input/input.component';
import Button from '../../components/button/button.component';
import StageCounter from '../../components/stage-counter/stage-counter.component';
const SignUpComponent = ({ state, handleChange, handleSubmit }) => {
	const [uploadBtnText, setUploadBtnText] = useState(
		'Upload a Profile Picture'
	);
	return (
		<div className='sign-up-wrapper'>
			<div className='sign-up-container '>
				<CardHeader />
				<div className='border-div'></div>
				<h1 className='ca-head'>Create your account</h1>
				<p className='ca-text'>
					Make sure to double check all the information you entered since you
					won't be able to change any of it later on.
				</p>
				<div className='row-div'>
					<InputComponent
						value={state.first_name}
						handleChange={handleChange}
						name='first_name'
						customClass='input-small'
						label='First Name'
					/>
					<InputComponent
						value={state.last_name}
						handleChange={handleChange}
						name='last_name'
						customClass='input-small'
						label='Last Name'
					/>
				</div>
				<InputComponent
					value={state.email}
					handleChange={handleChange}
					type='email'
					customClass='input-small email-input'
					name='email'
					label='Email Address'
				/>
				<div className='row-div'>
					<InputComponent
						value={state.address}
						handleChange={handleChange}
						name='address'
						customClass='input-small'
						label='Address'
					/>
					<InputComponent
						vallue={state.phone_number}
						handleChange={handleChange}
						name='phone_number'
						customClass='input-small'
						label='Phone Number'
					/>
				</div>
				<div className='row-div'>
					<InputComponent
						value={state.password}
						handleChange={handleChange}
						isPassword={true}
						type='password'
						customClass='input-small'
						name='password'
						label='Password'
					/>
					<InputComponent
						value={state.repeat_password}
						handleChange={handleChange}
						isPassword={true}
						customClass='input-small'
						type='password'
						name='repeat_password'
						label='Repeat Password'
					/>
				</div>
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
				<div className='bottom-element'>
					<Button handleClick={handleSubmit} type='primary'>
						Create Profile
					</Button>
					<StageCounter stage={2} />
				</div>
			</div>
		</div>
	);
};
/* <CardComponent customClass='sign-up-card'>
				<div className='sign-up-column'>
				 <h1 className='sign-up-head'>Create your Account</h1>
				
				
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
					<Button handleClick={handleSubmit} type='primary'>
						Create Profile
					</Button>
					<StageCounter stage={2} />
				</div>
			</CardComponent> */
export default SignUpComponent;
