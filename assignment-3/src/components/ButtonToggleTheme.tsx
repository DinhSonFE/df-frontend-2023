import { useContext, useEffect } from "react";
import "../assets/styles/buttonToggleTheme.css";
import { DataContext } from "../contexts/dataContext";

function ButtonToggleTheme() {
	// Get the context value from the DataContext
	const contextValue = useContext(DataContext);
	const { state, dispatch } = contextValue;

	useEffect(() => {
		// Get the root element of the document
		const rootElement = document.documentElement;

		// Check if a theme is stored in local storage
		const localTheme = localStorage.getItem("theme");

		// Remove existing theme classes
		rootElement.classList.remove("light", "dark");

		if (localTheme) {
			// Add the stored theme class
			rootElement.classList.add(localTheme);
		} else {
			// Add the default theme class based on state
			rootElement.classList.add(state.theme ? "light" : "dark");
		}
	}, [state.theme]);

	// Handle change theme
	const handleChangeTheme = () => {
		// Dispatch the CHANGE_THEME action to update the state
		dispatch({ type: "CHANGE_THEME" });
	};

	return (
		<div className={`button-toggle  ${state.theme && "active"}`}>
			<label htmlFor="dark-mode-toggle" className="toggle">
				<input
					// Call handleChangeTheme function when the checkbox value changes
					onChange={handleChangeTheme}
					type="checkbox"
					className="theme-checkbox"
					id="dark-mode-toggle"
				/>
				<span className="toggle-button">
					<span className="crater crater-1" />
					<span className="crater crater-2" />
					<span className="crater crater-3" />
					<span className="crater crater-4" />
					<span className="crater crater-5" />
					<span className="crater crater-6" />
					<span className="crater crater-7" />
				</span>
				<span className="star star-1" />
				<span className="star star-2" />
				<span className="star star-3" />
				<span className="star star-4" />
				<span className="star star-5" />
				<span className="star star-6" />
				<span className="star star-7" />
				<span className="star star-8" />
			</label>
		</div>
	);
}

export default ButtonToggleTheme;