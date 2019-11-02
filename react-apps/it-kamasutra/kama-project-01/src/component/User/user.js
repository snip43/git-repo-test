import React from 'react';
import './user.css'

const User = (props) => {

	return (
		<div className='user d-flex mb-3 p-1'>
				
					<div className ='user_leftSide d-flex flex-column mr-3 align-items-center'>
								<div className='user_avatar'>
								<img src= {props.avatar} alt={props.name}/>
							
							</div>
								<p> {props.name}</p>
								<button 
										className='btn btn-sm btn-outline-info user_follow_btn'
										onClick={props.onFollow}>Подписаться</button>
					</div>
	
					<div className="user_rightSide col-9 d-flex flex-column justify-content-center">
						<div className="user_info_text p-2"> 
							<p>Статус: {props.followMessage}</p>
							<p>Я из: {props.country} , {props.city}</p>
						</div>
					</div>

		
		</div>

	)
}

export default User;