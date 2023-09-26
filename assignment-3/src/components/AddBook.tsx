import { useContext } from "react";
import { DataContext } from "../contexts/dataContext";
import Button from "./Button";
import ModalAddBook from "./ModalAddBook";

function AddBook() {
    const contextValue = useContext(DataContext);
    const { dispatch } = contextValue;

    // Handles the click event of the button and shows the modal to add a book.
    const handleShowModal = () => {
        dispatch({ type: "SHOW_MODAL_ADD", payload: true });
    };

    return (
        <div>
            {/* Button to trigger the modal */}
            <Button
                type="button"
                onClick={handleShowModal}
                variant="btn-primary"
                title="Add Book"
            />

            {/* Modal to add a book */}
            <ModalAddBook />
        </div>
    );
}

export default AddBook;
