import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

state = {
	term: ''
}

onSearchChange = (e)=>{
	const term = e.target.value;
	this.setState({ term });
	this.props.onSearchChange(term);
	
};

	render() {
		return 	(
			
				<input 
				className = 'search-input form-control'	
				type="text" 
				placeholder = 'What`s search ?'
				value = { this.state.term }
				onChange= { this.onSearchChange }
				/>
		
		)
	}
};

