import React, { Component } from 'react'
import ProfileInfo from '../Main/Profile/ProfileInfo/profileInfo'
import Axios from 'axios';

export default class ProfileInfoContainer extends Component {

componentDidMount(){
 let userId = this.props.match.params.userId;
	debugger;


	Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
		.then(response=>{
			this.props.setNameNewProfile(response.data.fullName)
			this.props.setPhotosLargeProfile(response.data.photos.large)
			this.props.setAboutMe(response.data.aboutMe)
			this.props.setIsLookingForJob(response.data.lookingForAJob)
			this.props.setLookingForJobDescription(response.data.lookingForAJobDescription)
			})
}
	render() {
		return <ProfileInfo 
							large={this.props.large}
							name={this.props.fullName}
							isLookingForJob={this.props.isLookingForJob}
							lookingForJobDescription={this.props.lookingForJobDescription} 
							aboutMe={this.props.aboutMe}
							/>
	}
}






