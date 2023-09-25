import {
	ADD,
	CHANGE_THEME,
	CLOSE_MODAL_ADD,
	CLOSE_MODAL_DELETE,
	DELETE,
	GET_VALUE_ADD,
	RESET_VALUE_ADD,
	SAVE_BOOK_ID,
	SEARCH,
	SET_CURRENT_PAGE,
	SHOW_MODAL_ADD,
	SHOW_MODAL_DELETE,
} from '../actions/index.js';
const reducer = (state, action) => {
	switch (action.type) {
		case CHANGE_THEME:
			// Change the theme and store it in local storage
			localStorage.setItem('theme', state.theme === false ? 'light' : 'dark');
			return {
				...state,
				theme: !state.theme,
			};
		case SEARCH:
			// Filter the book list based on the search query
			const filter = state.bookList.filter((book) =>
				book.name.toLowerCase().includes(state.searchQuery.toLowerCase()),
			);
			return {
				...state,
				searchQuery: action.payload,
				currentPage: 1,
				searchResults: filter,
			};
		case SET_CURRENT_PAGE:
			// Set the current page
			return {
				...state,
				currentPage: action.payload,
			};
		case GET_VALUE_ADD:
			// Get the values for adding a new book
			return {
				...state,
				newBookValue: {
					name: action.payload.name,
					author: action.payload.author,
					topic: action.payload.topic,
				},
			};
		case RESET_VALUE_ADD:
			// Reset the values for adding a new book
			return {
				...state,
				newBookValue: {
					name: '',
					author: '',
					topic: 'Progamming',
				},
			};

		case SHOW_MODAL_ADD:
			// Show the add modal
			return {
				...state,
				modalAddIsOpen: true,
			};
		case ADD:
			// Add a new book to the book list and store it in local storage
			const newBook = {
				id: Math.random(),
				...state.newBookValue,
			};
			const newListBook = [
				newBook,
				...JSON.parse(localStorage.getItem('booklist') || '[]'),
			];
			const debouncedAdd = () => {
				setTimeout(() => {
					localStorage.setItem('booklist', JSON.stringify(newListBook));
				}, 1);
			};
			debouncedAdd();
			return {
				...state,
				modalAddIsOpen: false,
				bookList: newListBook,
			};
		case CLOSE_MODAL_ADD:
			// Close the add modal
			return {
				...state,
				modalAddIsOpen: false,
			};
		case SHOW_MODAL_DELETE:
			// Show the delete modal
			return {
				...state,
				modalDeleteIsOpen: true,
			};
		case SAVE_BOOK_ID:
			// Save the book ID for deleting a book
			return {
				...state,
				bookId: action.payload,
			};
		case DELETE:
			// Delete a book from the book list and store it in local storage
			let newBookList;
			try {
				newBookList = state.bookList.filter((book) => {
					return book.id !== state.bookId;
				});
			} catch (error) {
				console.error('Error filtering book list:', error);
				newBookList = state.bookList;
			}
			try {
				localStorage.setItem('booklist', JSON.stringify(newBookList));
			} catch (error) {
				console.error('Error storing book list in local storage:', error);
			}
			return {
				...state,
				modalDeleteIsOpen: false,
				bookList: newBookList,
			};
		case CLOSE_MODAL_DELETE:
			// Close the delete modal
			return {
				...state,
				modalDeleteIsOpen: false,
			};
		default:
			return state;
	}
};

export default reducer;
