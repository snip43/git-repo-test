import React from 'react';

import './NewPost.css';

const NewPost = () => {
	return (
			<div className='post__new d-flex flex-column align-items-start'>
						<h5>Новый пост:</h5>
							<div className='d-flex justify-content-between w-100 align-items-center'>
								<textarea className='posts__area w-100' placeholder='Введите новое сообщение...'>
								</textarea>
								<button type='button' className=" post__new-button btn btn-success ml-3">Отправить</button>
							</div>
					</div>
	)
}

export default NewPost;
	

