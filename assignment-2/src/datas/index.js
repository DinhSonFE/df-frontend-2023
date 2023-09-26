export const bookList = [
	{
		id: 1,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 2,
		name: 'The Phoenix Project',
		author: 'Gene Kim',
		topic: 'DevOps',
	},
	{
		id: 3,
		name: 'Refactoring',
		author: 'Martin Fowler',
		topic: 'Programming',
	},
	{
		id: 4,
		name: 'The Phoenix Project',
		author: 'Gene Kim',
		topic: 'DevOps',
	},
	{
		id: 5,
		name: 'The Phoenix Project',
		author: 'Gene Kim',
		topic: 'DevOps',
	},
	{
		id: 6,
		name: 'The Phoenix Project',
		author: 'Gene Kim',
		topic: 'DevOps',
	},
	{
		id: 7,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 8,
		name: 'The Phoenix Project',
		author: 'Gene Kim',
		topic: 'DevOps',
	},
	{
		id: 9,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 10,
		name: 'The Phoenix Project',
		author: 'Gene Kim',
		topic: 'DevOps',
	},
	{
		id: 11,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 12,
		name: 'The Phoenix Project',
		author: 'Gene Kim',
		topic: 'DevOps',
	},
	{
		id: 13,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 14,
		name: 'The Phoenix Project',
		author: 'Gene Kim',
		topic: 'DevOps',
	},
	{
		id: 15,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 16,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 17,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 18,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 19,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 20,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 21,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 22,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 23,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 24,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 25,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 26,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 27,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 28,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 15,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 29,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 30,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
	{
		id: 31,
		name: 'Designing Data-Intersive Applications',
		author: 'Martin Kleppmann',
		topic: 'DataBase',
	},
];
export const initialState = {
	theme: getTheme(),
	searchQuery: '',
	currentPage: 1,
	modalAddIsOpen: false,
	modalDeleteIsOpen: false,
	bookId: undefined,
	bookList: JSON.parse(localStorage.getItem('booklist')) || bookList,
	searchResults: [],
	newBookValue: {
		name: '',
		author: '',
		topic: 'Programming',
	},
};
function getBookList() {
	try {
		const storedBookList = localStorage.getItem('booklist');
		return storedBookList ? JSON.parse(storedBookList) : bookList;
	} catch (error) {
		console.error('Error parsing book list:', error);
		return [];
	}
}
function getTheme ( ) {
	return localStorage.getItem('theme') === 'light' 
}