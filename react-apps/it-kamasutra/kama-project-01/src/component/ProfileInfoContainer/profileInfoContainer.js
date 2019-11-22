import React, { Component } from 'react'
import ProfileInfo from '../Main/Profile/ProfileInfo/profileInfo'
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {profileInfo} from '../../redux/profile-reducer';

class ProfileInfoContainer extends Component {

componentDidMount(){
 	let userId = this.props.match.params.userId;
	this.props.profileInfo(userId);
}
	render() {
		return <ProfileInfo 
							large={this.props.profile.photos.large}
							name={this.props.profile.fullName}
							isLookingForJob={this.props.profile.isLookingForJob}
							lookingForJobDescription={this.props.profile.lookingForJobDescription} 
							aboutMe={this.props.profile.aboutMe}
							/>
	}
}

const mapStateToProps = (state)=> {
	return {
		profile: state.profilePage.profileData
	}
}

const mapDispatchToProps = {
	profileInfo
}

export default compose(
	withRouter,
	connect(mapStateToProps,mapDispatchToProps)
)(ProfileInfoContainer);








