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
					<NewPostContainer state={props.state} 
													dispatch = {props.dispatch}/>
					<AllPosts postsData = {props.state.postsData} 
						/>
			</div>
	);
}

export default Profile;