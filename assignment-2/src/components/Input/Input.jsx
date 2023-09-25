import React from 'react';
import './Input.css';
function Input({label, icon, width, onChange, value, placeholder, name}) {
	return (
		<div className='text-field' style={{width: `${width}`}}>
			<label htmlFor={name}>{label}</label>
			<input
				required={true}
				name={name}
				onChange={onChange}
				autoComplete='off'
				value={value}
				type='text'
				id={name}
				placeholder={`${placeholder}`}
			/>
		</div>
	);
}

Input.propTypes = {};

export default Input;
