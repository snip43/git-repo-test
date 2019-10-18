import React from 'react'

import './profile.css';
import AllPosts from '../AllPosts';
import NewPost from '../NewPost';
import ProfileInfo from './ProfileInfo/';

const Profile = ({posDa}) => {
	return (
			<div className='ml-3 px-0'>
					<div className='profile__img'></div>
					<ProfileInfo />
					<NewPost />
					<AllPosts postsAll={posDa}/>
			</div>
	);
}

export default Profile;