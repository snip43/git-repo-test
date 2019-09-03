import React, { Component } from 'react';

import './list-item.css';

export default class ListItem extends Component {

onCloseClick = () => {
	console.log(`${this.props.label}`);
}

	render(){
		const { label, onDeleted } = this.props;
		return ( 
			<div 
				className='d-flex justify-content-between align-items-center'>
				<span>{ label } </span>
			 <button 
			 		className="btn btn-sm btn-outline-danger "
			 		onClick={ onDeleted } > 
			 		<i className="fa fa-trash-o" aria-hidden="true"></i>
			 </button>
			</div>
	 ) 
	}

} 
