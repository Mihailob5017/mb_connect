import React, { useState } from 'react';
import './sign_up.style.scss';
import FileBase from 'react-file-base64';
import Upload from '../../images/upload.svg';

// Components

import CardHeader from '../../components/card/card-header/card-header.component';
import InputComponent from '../../components/input/input.component';
import Button from '../../components/button/button.component';
import StageCounter from '../../components/stage-counter/stage-counter.component';
import DropDownComponent from '../../components/dropdown/dropdown.component';

const SignUpComponent = ({ state, handleChange, handleSubmit, options }) => {
	const [uploadBtnText, setUploadBtnText] = useState(
		'Upload a Profile Picture'
	);
	return (
		<div className='sign-up-wrapper'>
			<div className='sign-up-container'>
				<CardHeader />
				<div className='border-div'></div>
				<h1 className='ca-head'>Create your expert account</h1>
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
						type='password'
						customClass='input-small'
						name='repeat_password'
						label='Repeat Password'
					/>
				</div>{' '}
				<div className='about-me-wrapper'>
					<label>About me</label>
					<textarea
						value={state.about_me}
						name='about_me'
						onChange={(e) => handleChange(e.target.name, e.target.value)}
						className='about-me-textarea'
					></textarea>
				</div>
				<div className='row-div align'>
					<DropDownComponent
						value={state.service}
						handleChange={handleChange}
						options={options}
					/>{' '}
					<InputComponent
						value={state.price}
						handleChange={handleChange}
						type='number'
						name='price'
						customClass='input-small hourly-input'
						label='Hourly Price'
					/>
				</div>{' '}
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

export default SignUpComponent;
