import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

state = {
	searchText: ''
}

onSearchTextChange = (e)=>{
	this.setState({
	
		searchText: e.target.value
	})
	console.log('e.target.value', e.target.value)
}

render() {


return 	(
		<form >
			<input 
			className = 'search-input form-control'	
			type="search" 
			placeholder = 'What`s search ?'
			onChange= { this.onSearchTextChange }
			/>
		</form>
	)
}

};

