import React, { useContext, useMemo, useState } from "react";
import { IoRemove } from "react-icons/io5";
import "../assets/styles/tableBook.css";
import { DataContext } from "../contexts/dataContext";
import ModalDeleteBook from "./ModalDeleteBook";
import Pagination from "./Pagination";

// Table header
const tableHead: string[] = ["Name", "Author", "Topic", "Action"];

function TableBook() {
    const contextValue = useContext(DataContext);
    const { state, dispatch } = contextValue;
    const [nameBookDelete, setNameBookDelete] = useState("");

    // Number of books per page
    const booksPerPage = 5;

    const choseListBook = useMemo(() => {
        return state.searchResults && state.searchQuery !== ""
            ? state.searchResults
            : state.bookList;
    }, [state.searchResults, state.searchQuery, state.bookList]);

    const indexOfLastBook = useMemo(() => state.currentPage * booksPerPage, [state.currentPage]);
    const indexOfFirstBook = useMemo(() => indexOfLastBook - booksPerPage, [indexOfLastBook]);
    const totalPages = useMemo(() => Math.ceil(choseListBook.length / booksPerPage), [choseListBook.length]);

    const currentBooks = useMemo(() => choseListBook.slice(indexOfFirstBook, indexOfLastBook), [
        choseListBook,
        indexOfFirstBook,
        indexOfLastBook,
    ]);

    const handleShowModal = (id: number, name: string) => {
        dispatch({ type: "SHOW_MODAL_DELETE" });
        dispatch({ type: "SAVE_BOOK_ID", payload: id });
        setNameBookDelete(name);
    };

    return (
        <div className="container wrapper-table">
            <table className="table">
                <thead className="table-head">
                    <tr>
                        {/* Render table header */}
                        {tableHead.map((item) => (
                            <th key={item}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="tabble-row">
                    {/* Render table rows */}
                    {currentBooks.map((book) => (
                        <tr key={book.id} className="tabble-row-item">
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{book.topic}</td>
                            <td>
                                {/* Render delete button */}
                                <button
                                    onClick={() => handleShowModal(book.id, book.name)}
                                    className="delete-button"
                                >
                                    <IoRemove />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Render pagination component */}
            <Pagination length={totalPages} />
            {/* Render delete modal */}
            <ModalDeleteBook nameBook={nameBookDelete} />
        </div>
    );
}

export default TableBook;
