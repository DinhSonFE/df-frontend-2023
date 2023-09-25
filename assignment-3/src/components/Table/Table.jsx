import React, {useContext, useState} from 'react';
import {IoRemove} from 'react-icons/io5';
import {DataContext} from '../../App';
import './Table.css';
import Pagination from '../Pagination/Pagination';
import {SAVE_BOOK_ID, SHOW_MODAL_DELETE} from '../../actions';
import ModalDeleteBook from '../Modal/ModalDelete';

// Table header
const tableHead = ['Name', 'Author', 'Topic', 'Action'];

function Table() {
	const {state, dispatch} = useContext(DataContext);
	const [nameBookDelele, setNameBookDelete] = useState('');
	const booksPerPage = 5;
	const indexOfLastBook = state.currentPage * booksPerPage;
	const indexOfFirstBook = indexOfLastBook - booksPerPage;

	// Determine the list of books to display based on search results or the entire book list
	const choseListBook =
		state.searchResults && state.searchQuery !== ''
			? state.searchResults
			: state.bookList;

	// Get the current page of books
	const currentBooks = choseListBook.slice(indexOfFirstBook, indexOfLastBook);
	const totalPages = Math.ceil(choseListBook.length / booksPerPage);

	// Show modal delete book
	const handleShowModal = (id) => {
		dispatch({type: SHOW_MODAL_DELETE});
		dispatch({type: SAVE_BOOK_ID, payload: id});
		setNameBookDelete(state.bookList.filter((item) => item.id === id)[0].name);
	};

	return (
		<div className='container wrapper-table'>
			<table className='table'>
				<thead className='table-head'>
					<tr>
						{/* Render table header */}
						{tableHead.map((item) => (
							<th key={item}>{item}</th>
						))}
					</tr>
				</thead>
				<tbody className='tabble-row'>
					{/* Render table rows */}
					{currentBooks.map((book) => (
						<tr key={book.id} className='tabble-row-item'>
							<td>{book.name}</td>
							<td>{book.author}</td>
							<td>{book.topic}</td>
							<td>
								{/* Render delete button */}
								<button
									onClick={() => handleShowModal(book.id)}
									className='delete-button'>
									<IoRemove></IoRemove>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{/* Render pagination component */}
			<Pagination length={totalPages}></Pagination>
			{/* Render delete modal */}
			<ModalDeleteBook nameBook={nameBookDelele}></ModalDeleteBook>
		</div>
	);
}

Table.propTypes = {};

export default Table;
