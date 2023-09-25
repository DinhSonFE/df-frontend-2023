import React, {useContext, useEffect, useRef, useState} from 'react';
import './ModalAdd.css';
import './ModalDelete.css';
import {IoClose, IoNotificationsOutline} from 'react-icons/io5';
import {DataContext} from '../../App';
import Button from '../Button/Button';
import {CLOSE_MODAL_DELETE, DELETE} from '../../actions';

function ModalDeleteBook({nameBook}) {
	const {state, dispatch} = useContext(DataContext);

	const handleCloseModal = () => {
		dispatch({type: CLOSE_MODAL_DELETE});
	};
	const handleDeleteBook = () => {
		dispatch({type: DELETE});
	};
	return (
		<div
			className={`wrapper-modal ${
				state.modalDeleteIsOpen ? 'modal-active' : ''
			}`}>
			<div
				id='modal-container'
				className={`${state.modalDeleteIsOpen ? 'one' : ''} `}>
				<div className='modal-background'>
					<div className='modal'>
						<button onClick={handleCloseModal} className='close-modal'>
							<IoClose />
						</button>
						<div>
							<div className='modal-delete-head'>
								<IoNotificationsOutline />
								<h2>Delete Book</h2>
							</div>
							<div className='delete-modal-body'>
								<p>
									Do you want to delete
									<span className='delete-name'> {nameBook}</span> book ?
								</p>
							</div>
							<div className='delete-modal-footer'>
								<Button
									onClick={handleDeleteBook}
									variant={false}
									title='Delete'
								/>
								<Button
									onClick={handleCloseModal}
									variant={true}
									title='Cancel'
								/>
							</div>
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

export default ModalDeleteBook;
