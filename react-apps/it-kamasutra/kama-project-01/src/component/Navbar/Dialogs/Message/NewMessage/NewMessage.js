import React from 'react';
import './NewMessage.css';

const NewMessage = (props) => {
 
	let addMessageText = () => {
		props.addMessageText();
	}

	let updateNewMessageText = (e) => {
		let text = e.target.value ;
		props.updateNewMessageText(text);
	}

return (
			<div className='post__new d-flex flex-column align-items-start mt-3'>
						<h5>Новое сообщение:</h5>
							<div className='d-flex justify-content-between w-100 align-items-center'>
								<textarea 
										className='posts__area w-100' 
										placeholder='Введите новое сообщение...'
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
	

