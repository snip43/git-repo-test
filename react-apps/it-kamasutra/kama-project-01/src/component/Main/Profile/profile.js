import React from 'react'

import './profile.css';
import AllPosts from '../AllPosts';
import NewPostContainer from '../NewPostContainer';
import ProfileInfo from './ProfileInfo/';

const Profile = (props) => {
	
	return (
			<div className='ml-3 px-0'>
					<div className='profile__img'></div>
					<ProfileInfo />
					<NewPostContainer store={props.store} 
														/>
					<AllPosts 
										store={props.store}		/>
			</div>
	);
}

export default Profile;