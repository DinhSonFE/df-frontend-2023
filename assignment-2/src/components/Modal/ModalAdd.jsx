import React, {useContext, useState} from 'react';
import {IoClose} from 'react-icons/io5';
import {DataContext} from '../../App';
import {
	ADD,
	CLOSE_MODAL_ADD,
	GET_VALUE_ADD,
	RESET_VALUE_ADD,
} from '../../actions';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './ModalAdd.css';
function ModalAdd() {
	const {state, dispatch} = useContext(DataContext);
	const [checkValue, setCheckValue] = useState(false);
	const handleGetValueForm = (e) => {
		dispatch({
			type: GET_VALUE_ADD,
			payload: {
				...state.newBookValue,
				[e.target.name]: e.target.value,
			},
		});
	};
	const handleCloseModal = () => {
		dispatch({type: CLOSE_MODAL_ADD});
	};
	const handleAddNewBook = (e) => {
		e.preventDefault();
		if (state.newBookValue.name !== '' || state.newBookValue.author !== '') {
			dispatch({type: ADD});
			dispatch({type: RESET_VALUE_ADD});
		} else {
			setCheckValue(true);
		}
	};
	return (
		<div
			className={`wrapper-modal ${state.modalAddIsOpen ? 'modal-active' : ''}`}>
			<div
				id='modal-container'
				className={`${state.modalAddIsOpen ? 'one' : ''} `}>
				<div className='modal-background'>
					<div className='modal'>
						<button onClick={handleCloseModal} className='close-modal'>
							<IoClose></IoClose>
						</button>
						<div>
							<div className='modal-head'>
								<h2>Add Book</h2>
							</div>
							<form onSubmit={handleAddNewBook} className='modal-body'>
								<Input
									required={true}
									onChange={handleGetValueForm}
									value={state.newBookValue.name}
									name='name'
									placeholder='Enter book name ...'
									label='Name'></Input>
								<Input
									required={true}
									value={state.newBookValue.author}
									onChange={handleGetValueForm}
									name='author'
									placeholder='Enter book author ...'
									label='Author'></Input>
								<select
									name='topic'
									value={state.newBookValue.topic}
									onChange={handleGetValueForm}>
									<option value='Programing'>Programing</option>
									<option value='DataBase'>DataBase</option>
									<option value='DevOps'>DevOps</option>
								</select>
								{checkValue && (
									<p className='warning'>
										Please enter complete book information !
									</p>
								)}
								<Button
									type='submit'
									onClick={handleAddNewBook}
									variant='primary'
									title='Add'></Button>
							</form>
						</div>
						<svg
							className='modal-svg'
							xmlns='http://www.w3.org/2000/svg'
							width='100%'
							height='100%'
							preserveAspectRatio='none'>
							<rect
								x={0}
								y={0}
								fill='none'
								width={226}
								height={162}
								rx={3}
								ry={3}
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}

ModalAdd.propTypes = {};

export default ModalAdd;
