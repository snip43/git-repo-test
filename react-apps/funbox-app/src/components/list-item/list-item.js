import React, { Component } from 'react';

import './list-item.css';


export default class ListItem extends Component {

	state = {
		text: 1
	}

	render(){
		const {text} = this.state;
		return (
			<ul className='border border-info px-3 list mt-2'>
				<li >{text}
				<button type="button" className="close" aria-label="Close">
  					<span id='closeButton' aria-hidden="true">&times;</span>
				</button>
				</li>
			</ul>
		)
	}
}