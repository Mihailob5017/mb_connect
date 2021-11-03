import React, { useState } from 'react';
import EyeIcon from '../../images/visibility-button.svg';
import SearchIcon from '../../images/search.svg';
import './input.style.scss';
const InputComponent = ({
	value,
	handleChange,
	label,
	type = 'text',
	isPassword = false,
	isSearch = false,
	name,
	customClass,
	searchHandler,
	placeholder,
}) => {
	const [isShownType, setShownType] = useState(true);

	const handleClick = () => setShownType(!isShownType);

	return (
		<div className={`input-wrapper ${customClass}`}>
			<label htmlFor={name}>{label}</label>
			<input
				name={name}
				type={isShownType === true ? type : 'text'}
				value={value}
				placeholder={placeholder}
				onChange={(val) => handleChange(name, val.target.value)}
			/>
			{isPassword === true ? (
				<button onClick={handleClick}>
					<img src={EyeIcon} alt='Eye Icon' />
					{isShownType ? 'Show' : 'Hide'}
				</button>
			) : (
				<></>
			)}
			{isSearch === true ? (
				<button onClick={searchHandler}>
					<img src={SearchIcon} alt='Search Icon' />
				</button>
			) : (
				<></>
			)}
		</div>
	);
};

export default InputComponent;
