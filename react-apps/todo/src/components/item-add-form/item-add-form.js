import React, { Component } from 'react';
import './item-add-form.css';


export default class ItemAddForm extends Component {

	render(){
		return(
			<div className='item-add-form'>
						<button 
						type='button' 
						className="btn btn-outline-secondary mt-2 float-right"
						onClick = { () =>  { this.props.onItemAdded('Hello World')} } >
						Add Item
						</button>
			</div>
				)
	}


}



	

