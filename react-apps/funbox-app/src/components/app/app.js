import React, { Component } from 'react';

import AddItemForm from '../add-item-form/add-item-form';
import Row from '../row/row';
import ListItem from '../list-item/list-item';
import Maps from '../maps/maps';
import './app.css'

export default class App extends Component {

	state= {
		text:2
	}

	


	render(){

	const {text} = this.state;

		return (
			<div className= 'container w-70 mt-5 app border border-primary'>
				<Row 
				left = { 
					<div className ='col'>
						<AddItemForm 
							value={text}/>
						<ListItem />
					</div>  }
				right = { <Maps /> }
				/>
			</div>
				
		)
	}
}