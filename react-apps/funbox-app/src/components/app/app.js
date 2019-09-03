import React, { Component } from 'react';

import Input from '../input/input';
import List from '../list/list';
import Maps from '../maps/maps';
import './app.css'

export default class App extends Component {

state = {
	data : []
}

deleteItem = (id) => {
	this.setState(({data})=> {
		const idx = id;

		const newData = [ 
			...data.slice(0, idx), 
			...data.slice(idx+1)
		];

		return {
			data: newData
		}
	})
}

addItem = (event) =>{
	const target = event.target;
	let newItemLabel = '';
	if(event.keyCode === 13) {
		event.preventDefault();
		newItemLabel = target.value;
		this.setState( ({data})=>{
			const newData = [
				...data,
				newItemLabel
			];

			return {
				data: newData
			}
		})
		target.value = '';
	}
}

	render(){
		const { data } = this.state;

		return (
			<div className= 'container w-70 h-100 row mx-auto my-5 '>
				<div className ='col'> 
						<div >
									<Input 
											onInput = { this.addItem }
												/> 
									<List 
											todos = { data } 
											onDeleted = { this.deleteItem }
								/>
								</div> 
				</div>
				<div className='col'> 
					<Maps /> 
				</div>

			</div>
						
		)
	}
}