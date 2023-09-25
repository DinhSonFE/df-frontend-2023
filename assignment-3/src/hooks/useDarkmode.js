import {useContext, useEffect} from 'react';
import {DataContext} from '../App';
import {CHANGE_THEME} from '../actions';

export const useDarkMode = () => {
	const {state, dispatch} = useContext(DataContext);
	const handleChangeTheme = () => {
		dispatch({type: CHANGE_THEME});
	};
	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');
		localTheme &&
			dispatch({
				type: CHANGE_THEME,
			});
	}, []);
	return state.theme;
};
