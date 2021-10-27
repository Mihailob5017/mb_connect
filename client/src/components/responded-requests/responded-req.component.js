import React from 'react';
import './responded-req.style.scss';
// Code
const RespondedComponent = ({
	_id,
	profile_pic,
	first_name,
	last_name,
	accepted,
	email,
	address,
	phone_number,
	removeConnectionHandler,
}) => {
	return (
		<div className='response-single'>
			{profile_pic !== '' ? (
				<img src={profile_pic} alt={first_name + ' ' + last_name} />
			) : (
				<div className='response-img img-placeholder'>
					<h1>
						{first_name.charAt(0).toUpperCase() +
							last_name.charAt(0).toUpperCase()}
					</h1>
				</div>
			)}

			<div className='response-info'>
				<h1>{first_name + ' ' + last_name}</h1>
				{accepted === true ? (
					<>
						<p>
							Email:<label>{email}</label>
						</p>
						<p>
							Address:<label>{address ? address : 'Unavailable'}</label>
						</p>
						<p>
							Phone:<label>{phone_number ? phone_number : 'Unavailable'}</label>
						</p>
					</>
				) : (
					<p>
						Email:<label>{email}</label>
					</p>
				)}
				<button
					onClick={() => removeConnectionHandler(_id)}
					className='response-btn'
				>
					Cancel Connection
				</button>
			</div>
		</div>
	);
};

export default RespondedComponent;
