import React, {Component} from 'react'

import './profile.css';
import AllPostsContainer from '../AllPostsContainer';
import NewPostContainer from '../NewPostContainer';
import ProfileInfoContainerBox from '../../ProfileInfoContainerBox/';

export default class Profile extends Component {
	render() {
		return (
			<div className='ml-3 px-0'>
					<div className='profile__img'></div>
					<ProfileInfoContainerBox />
					<NewPostContainer />
					<AllPostsContainer />
			</div>
		);
	}
}
