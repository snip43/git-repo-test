import React from 'react';
import './friends.css';

import NavbarFriend from './navbar_friend';

const Friends = (props) => {

	let newFriend = props.friendsData.map( (f,index)=>  index<3 ? 	<NavbarFriend name={f.name}	avatar={f.avatar}	key={index} /> : null);

	return (

		<div className='friends d-flex flex-column'>
			<h3>	Friends</h3>
			<div className="friends__cards">
						{newFriend}
			 </div>
		</div>
	)
}

export default Friends;