import React, { Component } from 'react';
import './add-item-form.css';

export default class AddItemForm extends Component {



	handleKeyDown = (event, props) => {
		const text = event.target.value;
		if(event.keyCode === 13) {
				event.preventDefault();
				console.log(text,this.props.value);
				changeLi();
		}
	}

	changeLi = () => {
		this.setState({
			value: text
		})
	}



	render() {
		const { value } = this.props;
		return (
				<form >
					<input 
					onKeyDown = { this.handleKeyDown}
					type="text" 
					placeholder='Новая точка маршрута'
					className='form-control'
					/>
				</form>
		)
	}
}


