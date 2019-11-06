import UsersContainer from '../UsersContainer';
import {connect} from 'react-redux';

import {aCreatorFollow,aCreatorUnFollow,setUsersAC} from '../../redux/findUsers-reducer'


const mapStateToProps = (state) => {

	return {
		usersData: state.findUsersPage.usersData
	}
}
const mapDispatchToProps = (dispatch) => {

	return {
		onFollow: (userId) => {
			dispatch(aCreatorFollow(userId))
		},
		unFollow: (userId) => {
			dispatch(aCreatorUnFollow(userId))
		},
		setUsers: (usersData) => {
			dispatch(setUsersAC(usersData))
		}

	}
}

const FindUsers = connect(mapStateToProps,mapDispatchToProps)(UsersContainer);


export default FindUsers;
