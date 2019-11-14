import React from 'react';
import './user.css';
import photoDefault from '../../assets/images/photoDefault.jpg';
import {NavLink} from 'react-router-dom';



const User = (props) => {

	return (
		<div className='user d-flex mb-3 p-1'>
		
					<div className ='user_leftSide d-flex flex-column mr-3 align-items-center col-4'>
								<NavLink to={`/profile/${props.id}`}>
									<div className='user_avatar'>
									<img src= {props.avatar != null ? props.avatar : photoDefault} alt={props.name}/>
									</div>
								</NavLink>
								<p> {props.name}</p>
								{ props.follow ? 
									<button 
											className='btn btn-sm btn-info user_follow_btn'
											onClick={() => {props.unFollow() } }>Отписаться</button> :
									<button 
											className='btn btn-sm btn-outline-info user_unfollow_btn'
											onClick={() => {props.onFollow()}}>Подписаться</button> }
					</div>
	
					<div className="user_rightSide col-8 d-flex flex-column justify-content-center">
						<div className="user_info_text p-2"> 
							<p>Статус: {props.followMessage}</p>
							<p>Я из: 'props.country' , 'props.city'</p>
						</div>
					</div>

		
		</div>

	)
}

export default User;