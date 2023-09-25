import {useContext, useEffect} from 'react';
import './ButtonToggleTheme.css';
import {DataContext} from '../../App';
import {CHANGE_THEME} from '../../actions/index';
function ButtonToggleTheme() {
	const {state, dispatch} = useContext(DataContext);
	useEffect(() => {
		// Check if a theme is stored in local storage
		const localTheme = localStorage.getItem('theme');
		if (localTheme) {
			// Remove existing theme classes
			document.documentElement.classList.remove(
				localTheme === 'dark' ? 'light' : 'dark',
			);
			// Add the stored theme class
			document.documentElement.classList.add(
				localTheme === 'dark' ? 'dark' : 'light',
			);
		} else {
			// Add the default theme class based on state
			document.documentElement.classList.add(state.theme ? 'light' : 'dark');
		}
	}, [state.theme]);
	const handleChangeTheme = () => {
		dispatch({type: CHANGE_THEME});
	};
	return (
		<div className='button-toggle'>
			<input
				type='checkbox'
				checked={state.theme}
				className='theme-checkbox'
				id='toogle'
				onChange={handleChangeTheme}
			/>
			<label htmlFor='toggle' className='toggle' onClick={handleChangeTheme}>
				<span className='toggle-button'>
					<span className='crater crater-1' />
					<span className='crater crater-2' />
					<span className='crater crater-3' />
					<span className='crater crater-4' />
					<span className='crater crater-5' />
					<span className='crater crater-6' />
					<span className='crater crater-7' />
				</span>
				<span className='star star-1' />
				<span className='star star-2' />
				<span className='star star-3' />
				<span className='star star-4' />
				<span className='star star-5' />
				<span className='star star-6' />
				<span className='star star-7' />
				<span className='star star-8' />
			</label>
		</div>
	);
}

export default ButtonToggleTheme;
