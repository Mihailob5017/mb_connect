import React from 'react';

import './dropdown.style.scss';

const DropDownComponent = ({ options, state, handleChange, name }) => {
	return (
		<div className='dropdown-wrapper'>
			<label>Select Service/Expertise</label>
			<select
				name='service'
				value={state}
				onChange={(e) => handleChange(e.target.name, e.target.value)}
			>
				{options.map((option) => (
					<option key={option.key} value={option.value}>
						{option.text}
					</option>
				))}
			</select>
		</div>
	);
};

export default DropDownComponent;
