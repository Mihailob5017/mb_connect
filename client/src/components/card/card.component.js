import React from 'react';
import './card.style.scss';

const CardComponent = ({ children, customClass }) => {
	return <div className={`card-component ${customClass}`}>{children}</div>;
};

export default CardComponent;
