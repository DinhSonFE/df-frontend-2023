import { useCallback, useContext } from "react";
import { IoClose, IoNotificationsOutline } from "react-icons/io5";
import "../assets/styles/modal.css";
import { DataContext } from "../contexts/dataContext";
import Button from "./Button";

interface ModalDeleteBookProps {
    nameBook: string;
}
function ModalDeleteBook({ nameBook }: ModalDeleteBookProps) {
    // Access the data context
    const contextValue = useContext(DataContext);
    const { state, dispatch } = contextValue;

    // Callback function to close the delete modal
    const handleCloseModal = useCallback(() => {
        dispatch({ type: "CLOSE_MODAL_DELETE" });
    }, [dispatch]);

    // Callback function to handle book deletion
    const handleDeleteBook = useCallback(() => {
        dispatch({ type: "DELETE_BOOK" });
    }, [dispatch]);

    return (
        <div
            className={`wrapper-modal ${state.modalDeleteIsOpen ? "modal-active" : ""}`}
        >
            <div id="modal-container" className={`${state.modalDeleteIsOpen ? "one" : ""} `}>
                <div className="modal-background">
                    <div className="modal">
                        {/* Button to close the modal */}
                        <button onClick={handleCloseModal} className="close-modal">
                            <IoClose />
                        </button>
                        <div>
                            <div className="modal-delete-head">
                                {/* Icon for notifications */}
                                <IoNotificationsOutline />
                                <h2>Delete Book</h2>
                            </div>
                            <div className="delete-modal-body">
                                <p>
                                    {/* Display the name of the book to be deleted */}
                                    Do you want to delete
                                    <span className="delete-name"> {nameBook}</span> book ?
                                </p>
                            </div>
                            <div className="delete-modal-footer">
                                {/* Button to delete the book */}
                                <Button
                                    type="button"
                                    onClick={handleDeleteBook}
                                    variant="btn-secondary"
                                    title="Delete"
                                />
                                {/* Button to cancel the deletion */}
                                <Button
                                    type="button"
                                    onClick={handleCloseModal}
                                    variant="btn-primary"
                                    title="Cancel"
                                />
                            </div>
                        </div>
                        {/* SVG element for the modal background */}
                        <svg
                            className="modal-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="none"
                        >
                            <rect
                                x={0}
                                y={0}
                                fill="none"
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