import React, { Component } from 'react';
import './add-item-form.css';

export default class AddItemForm extends Component {
	render() {
		return (
				<form className=''>
					<input 
					type="text" 
					placeholder='Новая точка маршрута'
					className='form-control'
					/>
				</form>
		)
	}
}


