import React from 'react';

import './NewPost.css';

const NewPost = (props) => {
	
	let newElementPost = React.createRef();

	let addPost = () => {

		let text = newElementPost.current.value;
		props.addPost(text);
		props.updatePostText('');
	}

	let updateNewPostText = () => {
		let updateText = newElementPost.current.value;
		props.updatePostText(updateText);
	}

	return (
			<div className='post__new d-flex flex-column align-items-start'>
						<h5>Новый пост:</h5>
							<div className='d-flex justify-content-between w-100 align-items-center'>
								<textarea 
								className='posts__area w-100' 
								placeholder='Введите новое сообщение...'
								
								ref={newElementPost} 
								value ={props.newPostText} 
								onChange = {updateNewPostText}/>
							
								<button 
									type='button' 
									className=" post__new-button btn btn-success ml-3"
									onClick = {addPost}
									>									
									Отправить</button>
							</div>
					</div>
	)
}

export default NewPost;
	

