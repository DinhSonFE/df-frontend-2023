import React, { useContext, useMemo } from "react";
import "../assets/styles/pagination.css";
import { DataContext } from "../contexts/dataContext";

interface PaginationProps {
    length: number;
}
function Pagination({ length }: PaginationProps) {
    // Access the data context
    const contextValue = useContext(DataContext);
    const { state, dispatch } = contextValue;

    // Set current page
    const handlePageChange = (pageNumber: number) => {
        dispatch({ type: "SET_CURRENT_PAGE", payload: pageNumber });
    };

    // Calculate start page and end page
    const startPage = useMemo(() => Math.max(1, state.currentPage - 1), [state.currentPage]);
    const endPage = useMemo(() => Math.min(length, state.currentPage + 1), [state.currentPage, length]);

    return (
        <div className="pagination">
            {/* Show start page button */}
            {startPage > 1 && (
                <button onClick={() => handlePageChange(1)} className="circle">
                    1
                </button>
            )}

            {/* Show "..." button */}
            {startPage > 2 && (
                <button
                    onClick={() => handlePageChange(startPage - 1)}
                    className="circle"
                >
                    ...
                </button>
            )}

            {/* Show numbered page buttons */}
            {Array.from(
                { length: endPage - startPage + 1 },
                (_, index) => startPage + index,
            ).map((page) => (
                <button
                    onClick={() => handlePageChange(page)}
                    key={page}
                    className={`circle ${state.currentPage === page && "circle-active"}`}
                >
                    {page}
                </button>
            ))}

            {/* Show "..." button */}
            {endPage < length - 1 && (
                <button
                    onClick={() => handlePageChange(endPage + 1)}
                    className="circle"
                >
                    ...
                </button>
            )}

            {/* Show end page button */}
            {endPage < length && (
                <button onClick={() => handlePageChange(length)} className="circle">
                    {length}
                </button>
            )}
        </div>
    );
}

export default Pagination;