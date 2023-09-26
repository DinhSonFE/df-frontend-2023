import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
import "../assets/styles/modal.css";
import { DataContext } from "../contexts/dataContext";
import Input from "./Input";

function ModalAdd() {
    // Accessing the DataContext to get the state and dispatch function
    const contextValue = useContext(DataContext);
    const { state, dispatch } = contextValue;

    // State to store the value of the checkbox
    const [checkValue, setCheckValue] = useState<boolean>(false);

    // Handles getting the form values.
    const handleGetValueForm = (e) => {
        // Dispatching an action to update the state with the form values
        dispatch({
            type: "GET_VALUE_ADD",
            payload: {
                ...state.newBookValue,
                [e.target.name]: e.target.value,
            },
        });
    };

    // Handles closing the modal.
    const handleCloseModal = () => {
        // Dispatching an action to close the modal
        dispatch({ type: "CLOSE_MODAL_ADD" });
    };

    // Handles adding a new book.
    const handleAddNewBook = (e) => {
        e.preventDefault();
        // Checking if the name or author fields are not empty
        if (state.newBookValue.name !== "" || state.newBookValue.author !== "") {
            // Dispatching an action to add the new book to the state
            dispatch({ type: "ADD_BOOK" });
            // Dispatching an action to reset the form values
            dispatch({ type: "RESET_VALUE_ADD" });
            // Dispatching an action to close the modal
            dispatch({ type: "CLOSE_MODAL_ADD" });
        } else {
            // Setting the checkValue state to true if the name or author fields are empty
            setCheckValue(true);
        }
    };
    return (
        <div
            className={`wrapper-modal ${state.modalAddIsOpen ? "modal-active" : ""}`}
        >
            <div
                id="modal-container"
                className={`${state.modalAddIsOpen ? "one" : ""} `}
            >
                <div className="modal-background">
                    <div className="modal">
                        <button onClick={handleCloseModal} className="close-modal">
                            <IoClose />
                        </button>
                        <div>
                            <div className="modal-head">
                                <h2>Add Book</h2>
                            </div>
                            <form onSubmit={handleAddNewBook} className="modal-body">
                                {/* Usage of Input components */}
                                <Input
                                    onChange={handleGetValueForm}
                                    value={state.newBookValue.name}
                                    name="name"
                                    placeholder="Enter book name ..."
                                    label="Name"
                                />
                                <Input
                                    value={state.newBookValue.author}
                                    onChange={handleGetValueForm}
                                    name="author"
                                    placeholder="Enter book author ..."
                                    label="Author"
                                />
                                <select
                                    name="topic"
                                    value={state.newBookValue.topic}
                                    onChange={handleGetValueForm}
                                >
                                    <option value="Programing">Programing</option>
                                    <option value="DataBase">DataBase</option>
                                    <option value="DevOps">DevOps</option>
                                </select>
                                {checkValue && (
                                    <p className="warning">
                                        Please enter complete book information !
                                    </p>
                                )}
                                <Button
                                    type="submit"
                                    onClick={handleAddNewBook}
                                    variant="btn-primary"
                                    title="Add"
                                />
                            </form>
                        </div>
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

export default ModalAdd;
