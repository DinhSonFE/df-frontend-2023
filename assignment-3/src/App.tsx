import { useEffect, useMemo, useReducer } from "react";
import { NavBar, FormSearchAdd, TableBook } from "./components";
import { reducer } from "./reducers/reducer/reducer";
import { DataContext } from "./contexts/dataContext";
import { initialState } from "./reducers/initialSate/initialState";
import './assets/styles/dark.css'
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    // Update local storage whenever the bookList state changes
    localStorage.setItem("booklist", JSON.stringify(state.bookList));
  }, [state.bookList]);

  const contextValue = useMemo(
    (): TDataContextValue => ({ state, dispatch }),
    [state, dispatch],
  );

  return (
    <DataContext.Provider value={contextValue}>
      <NavBar />
      <FormSearchAdd />
      <TableBook />
    </DataContext.Provider>
  );
}

export default App;
