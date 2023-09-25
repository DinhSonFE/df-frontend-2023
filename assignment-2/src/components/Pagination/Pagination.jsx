import React, {useContext} from 'react';
import './Pagination.css';
import {DataContext} from '../../App';

function Pagination({length}) {
	const {state, dispatch} = useContext(DataContext);

	// Set current page
	const handlePageChange = (pageNumber) => {
		dispatch({type: 'SET_CURRENT_PAGE', payload: pageNumber});
	};

	// Calculate start page and end page
	const startPage = Math.max(1, state.currentPage - 1);
	const endPage = Math.min(length, state.currentPage + 1);

	return (
		<div className='pagination'>
			{/* Show start page */}
			{startPage > 1 && (
				<button onClick={() => handlePageChange(1)} className='circle'>
					1
				</button>
			)}

			{startPage > 2 && (
				<button
					onClick={() => handlePageChange(startPage - 1)}
					className='circle'>
					...
				</button>
			)}

			{Array.from(
				{length: endPage - startPage + 1},
				(_, index) => startPage + index,
			).map((page) => (
				<button
					onClick={() => handlePageChange(page)}
					key={page}
					className={`circle ${state.currentPage === page && 'circle-active'}`}>
					{page}
				</button>
			))}

			{/* Show end page */}
			{endPage < length - 1 && (
				<button
					onClick={() => handlePageChange(endPage + 1)}
					className='circle'>
					...
				</button>
			)}

			{endPage < length && (
				<button onClick={() => handlePageChange(length)} className='circle'>
					{length}
				</button>
			)}
		</div>
	);
}

export default Pagination;
