import React from "react";
import AddBook from "./AddBook";
import SearchBook from "./SearchBook";
import "../assets/styles/formSearchAdd.css"

function Form() {
	return (
		<div className="container task">
			<SearchBook />
			<AddBook />
		</div>
	);
}

export default Form;
