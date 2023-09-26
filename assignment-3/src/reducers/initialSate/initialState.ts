import { bookList } from "../../bookDatas";

export const initialState: TInitialState = {
    theme: getTheme(),
    searchQuery: "",
    currentPage: 1,
    modalAddIsOpen: false,
    modalDeleteIsOpen: false,
    bookId: undefined,
    bookList: getBookList(),
    searchResults: [],
    newBookValue: {
        name: "",
        author: "",
        topic: "Programming",
    },
};
function getBookList() {
    try {
        const storedBookList: string | null = localStorage.getItem("booklist");
        return storedBookList ? JSON.parse(storedBookList) : bookList;
    } catch (error) {
        console.error("Error parsing book list:", error);
        return [];
    }
}
function getTheme(): boolean {
    return localStorage.getItem("theme") === "light";
}
