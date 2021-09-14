import React from 'react';
import './button.style.scss';

const Button = ({
	handleClick,
	type,
	extraStyle,
	disabled = false,
	children,
}) => {
	return (
		<button
			disabled={disabled}
			onClick={handleClick}
			className={`button ${type} ${extraStyle}`}
		>
			{children}
		</button>
	);
};

export default Button;
