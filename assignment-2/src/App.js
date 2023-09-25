import {createContext, useEffect, useReducer} from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import reducer from './reducers';
import Form from './components/Form/Form';

import Table from './components/Table/Table';
import {initialState} from './datas/index';
// Create a context to share data between components
export const DataContext = createContext();
function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	useEffect(() => {
		// Update local storage whenever the bookList state changes
		localStorage.setItem('booklist', JSON.stringify(state.bookList));
	}, [state.bookList]);

	return (
		<DataContext.Provider value={{state, dispatch}}>
				<NavBar />
				<Form />
				<Table />
		</DataContext.Provider>
	);
}

export default App;
