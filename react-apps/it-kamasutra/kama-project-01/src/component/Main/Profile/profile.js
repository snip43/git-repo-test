import React from 'react'

import './profile.css';
import AllPosts from '../AllPosts';
import NewPost from '../NewPost';
import ProfileInfo from './ProfileInfo/';

const Profile = (props) => {
	return (
			<div className='ml-3 px-0'>
					<div className='profile__img'></div>
					<ProfileInfo />
					<NewPost 
						addPost={props.addPost}
						newPostText = {props.state.newPostText} 
						updatePostText={props.updatePostText}/>
					<AllPosts postsData = {props.state.postsData} 
						/>
			</div>
	);
}

export default Profile;