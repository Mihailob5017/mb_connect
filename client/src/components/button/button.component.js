import React from 'react';
import './button.style.scss';

const Button = ({
	actionHandler,
	type,
	extraStyle,
	disabled = false,
	children,
}) => {
	return (
		<button
			disabled={disabled}
			onClick={actionHandler}
			className={`button ${type} ${extraStyle}`}
		>
			{children}
		</button>
	);
};

export default Button;
