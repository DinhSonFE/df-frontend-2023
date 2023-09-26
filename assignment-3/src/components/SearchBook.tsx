import { useCallback, useContext, useEffect, useState } from "react";
import Input from "./Input";
import { DataContext } from "../contexts/dataContext";

function SearchBook() {
    // Access the data context
    const contextValue = useContext(DataContext);
    const { state, dispatch } = contextValue;

    // State for input value
    const [inputValue, setInputValue] = useState<string>("");

    // Handles the change event of the input.
    // Updates the input value and dispatches the search query to the data context
    const handleGetValue = useCallback((e) => {
        setInputValue(e.target.value);
        dispatch({ type: "GET_SEARCH_QUERY", payload: e });
    }, [dispatch]);

    // Search book after 1 second
    useEffect(() => {
        // Set a timeout to delay the search
        const search = setTimeout(() => {
            dispatch({ type: "SEARCH_BOOK" });
        }, 1000);
        // Clear the timeout when the search query or the component unmounts
        return () => {
            clearTimeout(search);
        };
    }, [state.searchQuery, dispatch]);

    // Render the Input component with the necessary props
    return (
        <Input
            value={inputValue}
            name="search"
            onChange={handleGetValue}
            placeholder="Enter name book ..."
            label="Search Book"
            width="300px"
        />
    );
}
export default SearchBook;