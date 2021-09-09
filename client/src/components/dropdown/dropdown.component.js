import React from 'react';

import './dropdown.style.scss';

const DropDownComponent = ({ options }) => {
	return (
		<div className='dropdown-wrapper'>
			<label>Select Service/Expertise</label>
			<select>
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
