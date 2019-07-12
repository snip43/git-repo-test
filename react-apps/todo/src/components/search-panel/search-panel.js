import React from 'react';
import './search-panel.css';

const SearchPanel = ()=>{
	const searchText = 'search' 
	return 	(
		<input 
		className = 'search-input form-control'	
		type="search" 
		placeholder={ searchText }
		/>
	)
};

export default SearchPanel;