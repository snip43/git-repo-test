import React from 'react';
import './NewMessage.css';
import {aCreatorAddMessage,aCreatorUpdateMessageText} from '../../../../../redux/state'

const NewMessage = (props) => {

	let newMessageRef = React.createRef();

	let addMessageText = () => {
		props.dispatch(aCreatorAddMessage());
	}

	let updateNewMessageText = (event) => {
		let text = event.target.value ;
		props.dispatch(aCreatorUpdateMessageText(text));
	}

return (
			<div className='post__new d-flex flex-column align-items-start mt-3'>
						<h5>Новое сообщение:</h5>
							<div className='d-flex justify-content-between w-100 align-items-center'>
								<textarea 
										className='posts__area w-100' 
										placeholder='Введите новое сообщение...'
										ref ={newMessageRef} 
										value ={props.newMessageText} 
										onChange={updateNewMessageText}>
								</textarea>
								<button 
										type='button' 
										className=" post__new-button btn btn-success ml-3"
										onClick={addMessageText}>									
									Отправить</button>
							</div>
					</div>
	)
}

export default NewMessage;
	

