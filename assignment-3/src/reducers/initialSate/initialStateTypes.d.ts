interface TInitialState {
    theme: boolean;
    searchQuery: string;
    currentPage: number;
    modalAddIsOpen: boolean;
    modalDeleteIsOpen: boolean;
    bookId: undefined | number;
    bookList: TBookList[];
    searchResults: TBookList[];
    newBookValue: {
        name: string;
        author: string;
        topic: "Programming" | "Database" | "DevOps";
    };
}

interface TBookList {
    id: number;
    name: string;
    author: string;
    topic: "Programming" | "DataBase" | "DevOps";
}
