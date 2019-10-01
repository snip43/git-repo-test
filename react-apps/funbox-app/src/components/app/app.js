import React, { Component } from 'react';

import Input from '../input/input';
import List from '../list/list';
import Maps from '../maps/maps';
import './app.css'

export default class App extends Component {

state = {
	data : [],
	
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

addItem = (event) => {
	const target = event.target;
	let newItemLabel ='';

	if(event.keyCode === 13) {
		event.preventDefault();
		
		newItemLabel = target.value;
		target.value = '';

		this.setState(({data}) => {
		
			const newData = [
				...data,
				newItemLabel
			];

			newData.map((item) => {
				fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=8f42e052-d447-4449-976a-1f7e03ad7c41&geocode=${item}`)
					.then(res => console.log('res:', res.geoObjects.get(0)))
					.catch(err => console.log('error: ', err))
			})

			return {
				data: newData
			}
		})
	
	
		}
				// data: res.geoObjects.get(0).geometry.getCoordinates() }))
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