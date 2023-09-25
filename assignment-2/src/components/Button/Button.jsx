import React from 'react';
import './Button.css';
function Button({onClick, title, variant, type}) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`btn ${variant ? 'btn-primary' : 'btn-secondary'}`}>
			{title}
		</button>
	);
}

export default Button;
