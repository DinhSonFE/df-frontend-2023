import React, {useContext} from 'react';
import {DataContext} from '../../App';
import {SHOW_MODAL_ADD} from '../../actions';
import Button from '../Button/Button';
import ModalAdd from '../Modal/ModalAdd';

function AddBook(props) {
	const {dispatch} = useContext(DataContext);

	// Handles the click event of the button and shows the modal to add a book.
	const handleShowModal = () => {
		dispatch({type: SHOW_MODAL_ADD, payload: true});
	};
	
	return (
		<div>
			{/* Button to trigger the modal */}
			<Button
				variant='primary'
				title='Add Book'
				onClick={handleShowModal}></Button>

			{/* Modal to add a book */}
			<ModalAdd></ModalAdd>
		</div>
	);
}

AddBook.propTypes = {};

export default AddBook;
