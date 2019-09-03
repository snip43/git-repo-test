import React, { Component } from 'react';
import './input.css';

export default class Input extends Component {

	render() {

		const { onInput } = this.props;
		

		return (
				<form >
					<input 
					type="text" 
					placeholder='Новая точка маршрута'
					className='form-control'
					onKeyDown = { onInput }
					/>
					
				</form>
		)
	}
}


