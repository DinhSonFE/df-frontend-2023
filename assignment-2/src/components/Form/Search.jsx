import React, {useContext, useEffect, useState} from 'react';
import Input from '../Input/Input';
import {DataContext} from '../../App';
import {SEARCH} from '../../actions';

function Search(props) {
	const {state, dispatch} = useContext(DataContext);
	const handleGetValue = (e) => {
		const inputValue = e.target.value;
		dispatch({type: SEARCH, payload: inputValue});
	};
	return (
		<>
			<Input
				value={state.searchQuery}
				name='search'
				onChange={handleGetValue}
				placeholder='Enter name book ...'
				label='Search Book'
				width='300px'></Input>
		</>
	);
}
export default Search;
