import React from 'react';
import Preloader from '../../../Preloader'

import './profileInfo.css';


const ProfileInfo = (props) => {

	if(!props.large || !props.name) {
		return <Preloader />
	}

const isLook = () => {
	if(props.isLookingForJob) {
		return 'Ищу'
	} else {
		return 'Не ищу'
	}
}	


	return (

				<div className='profile d-flex my-3'>
						<div className='col-4 pl-0 mr-4'>
							<img src={props.large} alt="foto" className='profile__foto'/>
						</div>
						<div className='profile__info d-flex flex-column text-left pt-3'>
							<h4 className='mb-5'>{props.name}</h4>
							<p><b>В поисках работы: </b>{isLook()}</p>
							<p><b>Примечания по поиску работы: </b>{props.lookingForJobDescription}</p>
							<p><b>Обо мне: </b>{props.aboutMe}</p>
							<p><b>Мои контакты: </b>{props.contacts}</p>

{/* 							
							<p><b>День рождения:</b> 30.09.1987</p>
							<p><b>Город рождения:</b> Киров,Кировская область</p>
							<p><b>Город проживания:</b> Москва,Московская область</p> */}
						</div>
					</div>
		
	)
}

export default ProfileInfo;