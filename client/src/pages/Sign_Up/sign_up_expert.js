import React, { useState } from 'react';
import './sign_up.style.scss';
import FileBase from 'react-file-base64';
import Upload from '../../images/upload.svg';
// Components
import GreenScreen from '../../components/green-screen/green-screen.component';
import CardComponent from '../../components/card/card.component';
import CardHeader from '../../components/card/card-header/card-header.component';
import InputComponent from '../../components/input/input.component';
import Button from '../../components/button/button.component';
import StageCounter from '../../components/stage-counter/stage-counter.component';
import DropDownComponent from '../../components/dropdown/dropdown.component';

const SignUpComponent = ({ state, handleChange }) => {
	const options = [
		{ key: 'default', text: 'Service you Provide', value: '' },
		{ key: 'angular', text: 'Angular', value: 'angular' },
		{ key: 'css', text: 'CSS', value: 'css' },
		{ key: 'design', text: 'Graphic Design', value: 'design' },
		{ key: 'ember', text: 'Ember', value: 'ember' },
		{ key: 'html', text: 'HTML', value: 'html' },
		{ key: 'ia', text: 'Information Architecture', value: 'ia' },
		{ key: 'javascript', text: 'Javascript', value: 'javascript' },
		{ key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
		{ key: 'meteor', text: 'Meteor', value: 'meteor' },
		{ key: 'node', text: 'NodeJS', value: 'node' },
		{ key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
		{ key: 'python', text: 'Python', value: 'python' },
		{ key: 'rails', text: 'Rails', value: 'rails' },
		{ key: 'react', text: 'React', value: 'react' },
		{ key: 'repair', text: 'Kitchen Repair', value: 'repair' },
		{ key: 'ruby', text: 'Ruby', value: 'ruby' },
		{ key: 'ui', text: 'UI Design', value: 'ui' },
		{ key: 'ux', text: 'User Experience', value: 'ux' },
	];
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
					<DropDownComponent
						value={state.service}
						handleChange={handleChange}
						options={options}
					/>
					<div className='about-me-wrapper'>
						<label>About me</label>
						<textarea
							value={state.about_me}
							name='about_me'
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							className='about-me-textarea'
						></textarea>
					</div>
				</div>

				<div className='sign-up-column'>
					<div className='empty-space'></div>
					<InputComponent
						value={state.password}
						isPassword={true}
						type='password'
						name='password'
						label='Password'
					/>
					<InputComponent
						value={state.repeat_password}
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
