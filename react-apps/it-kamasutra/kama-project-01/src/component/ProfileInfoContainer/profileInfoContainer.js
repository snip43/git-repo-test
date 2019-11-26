import React, { Component } from 'react'
import ProfileInfo from '../Main/Profile/ProfileInfo/profileInfo'
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {profileInfo,profileStatus,updateProfileStatus} from '../../redux/profile-reducer';

class ProfileInfoContainer extends Component {

componentDidMount(){
 	let userId = this.props.match.params.userId;
	this.props.profileInfo(userId);
	this.props.profileStatus(userId);
}
	render() {

		const {aboutMe,fullName,isLookingForJob,lookingForJobDescription,status} = this.props.profile;

		return <ProfileInfo 
							large={this.props.profile.photos.large}
							name={fullName}
							isLookingForJob={isLookingForJob}
							lookingForJobDescription={lookingForJobDescription} 
							aboutMe={aboutMe}
							status ={status}
							updateProfileStatus = {this.props.updateProfileStatus}
							/>
	}
}

const mapStateToProps = (state)=> {
	return {
		profile: state.profilePage.profileData
	}
}

const mapDispatchToProps = {
	profileInfo,
	profileStatus,
	updateProfileStatus
}

export default compose(
	withRouter,
	connect(mapStateToProps,mapDispatchToProps)
)(ProfileInfoContainer);








