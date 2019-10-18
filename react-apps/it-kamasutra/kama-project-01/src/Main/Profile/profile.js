import React from 'react'

import './profile.css';
import AllPosts from '../AllPosts';
import NewPost from '../NewPost';
import ProfileInfo from '../ProfileInfo/';

const Profile = () => {
	return (
			<div className='ml-3 px-0'>
					<div className='profile__img'></div>
					<ProfileInfo />
					<NewPost />
					<AllPosts />
			</div>
	);
}

export default Profile;