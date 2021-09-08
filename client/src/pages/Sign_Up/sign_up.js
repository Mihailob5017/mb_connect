import React from 'react';
import './sign_up.style.scss';
// Components
import GreenScreen from '../../components/green-screen/green-screen.component';
import CardComponent from '../../components/card/card.component';
import CardHeader from '../../components/card/card-header/card-header.component';
const SignUpComponent = ({ type }) => {
	return (
		<div className='sign-up-container '>
			<GreenScreen reduced={true} />
			<CardComponent customClass='sign-up-card'>
				<div className='sign-up-column'>
					<CardHeader /> <h1 className='sign-up-head'>Create your Account</h1>
				</div>
				<div className='sign-up-column'></div>
			</CardComponent>
		</div>
	);
};

export default SignUpComponent;
