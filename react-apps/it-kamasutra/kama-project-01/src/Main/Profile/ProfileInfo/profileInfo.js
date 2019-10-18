import React from 'react';

import './profileInfo.css';


const ProfileInfo = () => {
	return (

		<div className='profile d-flex my-3'>
						<div className='col-4 pl-0 mr-4'>
							<img src="https://i.pinimg.com/originals/14/fb/fd/14fbfd63332378ea42542d89b00253e5.jpg" alt="foto" className='profile__foto'/>
						</div>
						<div className='profile__info d-flex flex-column text-left pt-3'>
							<h4 className='mb-5'>Роман Костин</h4>
							<p><b>День рождения:</b> 30.09.1987</p>
							<p><b>Город рождения:</b> Киров,Кировская область</p>
							<p><b>Город проживания:</b> Москва,Московская область</p>
						</div>
					</div>
		
	)
}

export default ProfileInfo;