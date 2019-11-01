import React from 'react'

import './profile.css';
import AllPostsContainer from '../AllPostsContainer';
import NewPostContainer from '../NewPostContainer';
import ProfileInfo from './ProfileInfo/';

const Profile = () => {

	return (
			<div className='ml-3 px-0'>
					<div className='profile__img'></div>
					<ProfileInfo />
					<NewPostContainer />
					<AllPostsContainer />
			</div>
	);
}

export default Profile;