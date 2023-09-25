import {
	CHANGE_THEME,
	SEARCH,
	SHOW_MODAL_ADD,
	ADD,
	CLOSE_MODAL_ADD,
	SHOW_MODAL_DELETE,
	DELETE,
	CLOSE_MODAL_DELETE,
	GET_VALUE_ADD,
	GET_DATA,
	RESET_VALUE_ADD,
	SET_CURRENT_PAGE,
	SAVE_BOOK_ID,
} from '../actions/index.js';
import {bookList} from '../datas/index.js';
const reducer = (state, action) => {
	switch (action.type) {
		case CHANGE_THEME:
			localStorage.setItem('theme', state.theme === false ? 'light' : 'dark');
			return {
				...state,
				theme: !state.theme,
			};
		case SEARCH:
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
			return {
				...state,
				currentPage: action.payload,
			};
		case GET_VALUE_ADD:
			return {
				...state,
				newBookValue: {
					name: action.payload.name,
					author: action.payload.author,
					topic: action.payload.topic,
				},
			};
		case RESET_VALUE_ADD:
			return {
				...state,
				newBookValue: {
					name: '',
					author: '',
					topic: 'Progamming',
				},
			};

		case SHOW_MODAL_ADD:
			return {
				...state,
				modalAddIsOpen: true,
			};
		case ADD:
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
			return {
				...state,
				modalAddIsOpen: false,
			};
		case SHOW_MODAL_DELETE:
			return {
				...state,
				modalDeleteIsOpen: true,
			};
		case SAVE_BOOK_ID:
			return {
				...state,
				bookId: action.payload,
			};
		case DELETE:
			const newBookList = state.bookList.filter((book) => {
				return book.id !== state.bookId;
			});
			localStorage.setItem('booklist', JSON.stringify(newBookList));
			return {
				...state,
				modalDeleteIsOpen: false,
				bookList: newBookList,
			};
		case CLOSE_MODAL_DELETE:
			return {
				...state,
				modalDeleteIsOpen: false,
			};
		default:
			return state;
	}
};

export default reducer;
