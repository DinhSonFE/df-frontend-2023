export const reducer = (state: TInitialState, action: TAction) => {
	switch (action.type) {
		// Change theme action
		case "CHANGE_THEME": {
			// Toggle theme in local storage based on the current state
			localStorage.setItem("theme", state.theme === false ? "light" : "dark");
			// Return the updated state with the theme toggled
			return {
				...state,
				theme: !state.theme,
			};
		}

		// Add reducer
		case "GET_VALUE_ADD": {
			// Update the newBookValue object in the state with the values from the action payload
			return {
				...state,
				newBookValue: {
					...state.newBookValue,
					name: action.payload.name ?? state.newBookValue.name,
					author: action.payload.author ?? state.newBookValue.author,
					topic: action.payload.topic ?? state.newBookValue.topic,
				},
			};
		}

		case "RESET_VALUE_ADD": {
			// Reset the newBookValue object in the state to its initial values
			return {
				...state,
				newBookValue: {
					name: "",
					author: "",
					topic: "Programming" as const,
				},
			};
		}

		case "SHOW_MODAL_ADD": {
			// Set modalAddIsOpen to true in the state
			return {
				...state,
				modalAddIsOpen: true,
			};
		}

		case "ADD_BOOK": {
			// Create a new book object with a random id and the values from the newBookValue object in the state
			const newBook = {
				id: Math.random(),
				...state.newBookValue,
			};
			// Create a new list of books by adding the new book to the beginning of the existing book list in local storage
			const newListBook: TBookList[] = [
				newBook,
				...JSON.parse(localStorage.getItem("booklist") || "[]"),
			];
			// Return the updated state with the modalAddIsOpen set to false and the bookList updated with the new list of books
			return {
				...state,
				modalAddIsOpen: false,
				bookList: newListBook,
			};
		}

		case "CLOSE_MODAL_ADD": {
			// Set modalAddIsOpen to false in the state
			return {
				...state,
				modalAddIsOpen: false,
			};
		}

		// Delete Reducer
		case "SHOW_MODAL_DELETE":
			// Set modalDeleteIsOpen to true in the state
			return {
				...state,
				modalDeleteIsOpen: true,
			};

		case "SAVE_BOOK_ID": {
			// Update the bookId in the state with the value from the action payload
			return {
				...state,
				bookId: action.payload,
			};
		}

		case "DELETE_BOOK": {
			// Create a new book list by filtering out the book with the same id as the bookId in the state
			const newBookList: TBookList[] = state.bookList.filter(
				(book: TBookList) => {
					return book.id !== state.bookId;
				},
			);
			// Update the book list in local storage with the new book list
			localStorage.setItem("booklist", JSON.stringify(newBookList));
			// Return the updated state with the modalDeleteIsOpen set to false and the bookList updated with the new book list
			return {
				...state,
				modalDeleteIsOpen: false,
				bookList: newBookList,
			};
		}

		case "CLOSE_MODAL_DELETE": {
			// Set modalDeleteIsOpen to false in the state
			return {
				...state,
				modalDeleteIsOpen: false,
			};
		}

		// Search Reducer
		case "GET_SEARCH_QUERY": {
			// Update the searchQuery in the state with
			const event: React.ChangeEvent<HTMLInputElement> = action.payload;
			const newValue: string = event.target.value;
			return {
				...state,
				searchQuery: newValue,
			};
		}

		case "SEARCH_BOOK": {
			// Filter the book list in the state based on the search query
			const filter: TBookList[] = state.bookList.filter((book: TBookList) =>
				book.name.toLowerCase().includes(state.searchQuery.toLowerCase()),
			);
			// Return the updated state with the current page set to 1 and the search results updated with the filtered book list
			return {
				...state,
				currentPage: 1,
				searchResults: filter,
			};
		}

		case "SET_CURRENT_PAGE": {
			// Update the current page in the state with the value from the action payload
			return {
				...state,
				currentPage: action.payload,
			};
		}

		// Default case
		default:
			// Return the current state as is
			return state;
	}
};
