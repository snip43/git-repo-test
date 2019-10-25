import React from 'react';


const NewMessage = (props) => {

	let newMessageRef = React.createRef();

	let addMessageText = () => {

		let text = newMessageRef.current.value;
		props.addMessage(text);
		props.updateMessageText('');
	}
	let updateNewMessageText = () => {
		let updateText = newMessageRef.current.value;
		props.updateMessageText(updateText);
	}

return (
			<div className='post__new d-flex flex-column align-items-start mt-3'>
						<h5>Новое сообщение:</h5>
							<div className='d-flex justify-content-between w-100 align-items-center'>
								<textarea 
								className='posts__area w-100' 
								placeholder='Введите новое сообщение...'
								ref ={newMessageRef} 
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
	

