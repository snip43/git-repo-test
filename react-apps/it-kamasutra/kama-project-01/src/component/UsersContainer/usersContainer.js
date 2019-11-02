import User from '../User';
import React from 'react';


const UsersContainer = (props) => {

	const onGoFollow = () => {
		props.onFollow();
	}
	const onGoUnFollow = () => {
		props.unFollow();
	}

		let userData = props.usersData.map((u,index) => (
				<User 
					key={index}
					id={u.id} 
					name={u.name}
					avatar={u.avatar}
					followMessage={u.followMessage}
					country={u.country}
					city={u.city}
					follow={u.follow}
					onFollow = {onGoFollow}
					unFollow = {onGoUnFollow}/>
		))		
		return userData;
}

export default UsersContainer;