import React, {useContext, useEffect, useState} from 'react';
import Input from '../Input/Input';
import {DataContext} from '../../App';
import {GET_SEARCH_QUERY, SEARCH} from '../../actions';

function Search(props) {
	const {state, dispatch} = useContext(DataContext);
	const [inputValue , setInputValue] = useState("")

	// Search book after 1 second
	useEffect(()=>{
		const search = setTimeout(()=>{
			dispatch({type: SEARCH});
		},1000)
		return ()=>{
			clearTimeout(search)
		}
	},[state.searchQuery])
	
	// Handles the change event of the input.
	const handleGetValue = (e) => {
		setInputValue(e.target.value)
		dispatch({type : GET_SEARCH_QUERY , payload : e})
	};

	return (
		<>
			<Input
				value={inputValue}
				name='search'
				onChange={handleGetValue}
				placeholder='Enter name book ...'
				label='Search Book'
				width='300px'></Input>
		</>
	);
}
export default Search;
