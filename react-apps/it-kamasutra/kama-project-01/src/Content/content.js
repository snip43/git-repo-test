import React from 'react'

import './content.css';


const Content = () => {
	return (
			<div className='container ml-3 px-0'>
					<div className='profile__img'></div>


					<div className='profile d-flex my-3'>
						<div className='col-4 pl-0 mr-4'>
							<img src="https://i.pinimg.com/originals/14/fb/fd/14fbfd63332378ea42542d89b00253e5.jpg" alt="foto" className='profile__foto'/></div>
						<div className='profile__info d-flex flex-column text-left pt-3'>
							<h4 className='mb-5'>Роман Костин</h4>
							<p><b>День рождения:</b> 30.09.1987</p>
							<p><b>Город рождения:</b> Киров,Кировская область</p>
							<p><b>Город проживания:</b> Москва,Московская область</p>
						</div>
					</div>

					<div className='post__new d-flex flex-column align-items-start'>
						<h5>Новый пост:</h5>
							<div className='d-flex justify-content-between w-100 align-items-center'>
								<textarea className='posts__area w-100' placeholder='Введите новое сообщение...'>
								</textarea>
								<button type='button' className=" post__new-button btn btn-success ml-3">Отправить</button>
							</div>
					</div>

					<div>
						<div className='posts_old d-flex flex-column my-3 align-items-start w-75'>
							<h5>Недавние сообщения:</h5>
							<div className='post_1 border border-dark p-2 my-2 rounded w-100 text-left'>
							<i className="fa fa-comment mr-3" aria-hidden="true"></i>
								Всем привет!
								</div>
							<div className='post_2 border border-dark p-2 my-2 w-100 rounded text-left'>
							<i className="fa fa-comment mr-3" aria-hidden="true"></i>
								И еще раз всем привет!
								</div>
							
						</div>
					</div>
					
			</div>
	);
}

export default Content;