type TAction =
    | { type: "CHANGE_THEME" }
    | {
        type: "GET_VALUE_ADD";
        payload: {
            name?: string;
            author?: string;
            topic?: "Programming" | "Database" | "DevOps";
        };
    }
    | { type: "CLOSE_MODAL_ADD" }
    | { type: "ADD_BOOK" }
    | { type: "RESET_VALUE_ADD" }
    | { type: "SHOW_MODAL_ADD"; payload: boolean }
    | { type: "RESET_VALUE_ADD" }
    | {
        type: "GET_SEARCH_QUERY";
        payload: React.ChangeEvent<HTMLInputElement>;
    }
    | { type: "SEARCH" }
    | { type: "SAVE_BOOK_ID"; payload: number }
    | { type: "SHOW_MODAL_DELETE" }
    | { type: "CLOSE_MODAL_DELETE" }
    | { type: "DELETE_BOOK" }
    | { type: "SET_CURRENT_PAGE"; payload: number }
    | { type: "SEARCH_BOOK" };


type TReducerAction = {
    type: string;
    payload?: any;
};