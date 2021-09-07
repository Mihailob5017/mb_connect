import React, { useState } from 'react';
import EyeIcon from '../../images/visibility-button.svg';
import './input.style.scss';
const InputComponent = ({
	value,
	handleChange,
	label,
	type,
	isPassword = false,
	name,
	customClass,
}) => {
	const [isShownType, setShownType] = useState(true);

	const handleClick = () => setShownType(!isShownType);

	return (
		<div className={`input-wrapper ${customClass}`}>
			<label for={name}>{label}</label>
			<input
				name={name}
				type={isShownType === true ? type : 'text'}
				value={value}
				onChange={(e) => handleChange(e.target.value)}
			/>
			{isPassword === true ? (
				<button onClick={handleClick}>
					<img src={EyeIcon} alt='Eye Icon' />
					{isShownType ? 'Show' : 'Hide'}
				</button>
			) : (
				<></>
			)}
		</div>
	);
};

export default InputComponent;
