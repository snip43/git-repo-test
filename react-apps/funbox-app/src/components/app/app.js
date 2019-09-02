import React, { Component } from 'react';

import Input from '../input/input';
import Row from '../row/row';
import List from '../list/list';
import Maps from '../maps/maps';
import './app.css'

export default class App extends Component {

state = {
	label : ['Drink Coffee', 'Create React App' ]
}

render(){

		return (
			<div className= 'container w-70 mt-5 app border border-primary'>
				<Row 
				left = { 
					<div className ='col'>
						<Input /> 
						<List todos = { this.state.label } />
					</div>  }
				right = { <Maps /> }
				/>
			</div>
				
		)
	}
}