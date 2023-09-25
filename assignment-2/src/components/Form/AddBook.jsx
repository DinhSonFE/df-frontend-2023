import React, {useContext} from 'react';
import Button from '../Button/Button';
import {DataContext} from '../../App';
import {GET_DATA, SHOW_MODAL_ADD} from '../../actions';
import ModalAdd from '../Modal/ModalAdd';

function AddBook(props) {
	const {state, dispatch} = useContext(DataContext);
	const handleShowModal = () => {
		dispatch({type: SHOW_MODAL_ADD, payload: true});
	};
	return (
		<div>
			<Button
				variant='primary'
				title='Add Book'
				onClick={handleShowModal}></Button>
			<ModalAdd></ModalAdd>
		</div>
	);
}

AddBook.propTypes = {};

export default AddBook;
