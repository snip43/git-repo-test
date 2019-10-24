import React from 'react';

const NewMessage = (props) => {

	let newMessageRef = React.createRef();

	let addNewMessage = () => {
		let text = newMessageRef.current.value;
		alert(text);
	}
	let getNewMessage = () => {
		let text = newMessageRef.current.value;
		props.updateMessageText(text);
	}

return (
			<div className='post__new d-flex flex-column align-items-start mt-3'>
						<h5>Новое сообщение:</h5>
							<div className='d-flex justify-content-between w-100 align-items-center'>
								<textarea 
								className='posts__area w-100' 
								placeholder='Введите новое сообщение...'
								ref ={newMessageRef} 
								onChange={getNewMessage}>
								</textarea>
								<button 
									type='button' 
									className=" post__new-button btn btn-success ml-3"
									onClick={addNewMessage}>									
									Отправить</button>
							</div>
					</div>
	)
}

export default NewMessage;
	

