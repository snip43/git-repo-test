import React, { Component } from 'react';
import './input.css';

export default class Input extends Component {

	render() {

		return (
				<form >
					<input 
					type="text" 
					placeholder='Новая точка маршрута'
					className='form-control'
					/>
				</form>
		)
	}
}


