import React from 'react';
import Search from './Search';
import AddBook from './AddBook';
function Form(props) {
	return (
		<div className='container task'>
			<Search></Search>
			<AddBook></AddBook>
		</div>
	);
}

Form.propTypes = {};

export default Form;
