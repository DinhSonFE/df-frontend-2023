import { createContext } from "react";
import { initialState } from "../reducers/initialSate/initialState";

export const DataContext = createContext<TDataContextValue>({
    state: initialState,
    dispatch: () => { },
});