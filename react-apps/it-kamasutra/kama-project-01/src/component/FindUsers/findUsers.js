import UsersContainer from '../UsersContainer';
import {connect} from 'react-redux';

import {aCreatorFollow,aCreatorUnFollow,setUsersAC,setCurrentPageAC, toggleIsFetchingAC,setTotalPeopleAC} from '../../redux/findUsers-reducer'


const mapStateToProps = (state) => {

	return {
		usersData: state.findUsersPage.usersData,
		currentPage: state.findUsersPage.currentPage,
		pageSize: state.findUsersPage.pageSize,
		totalPeople: state.findUsersPage.totalPeople,
		isFetching: state.findUsersPage.isFetching

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
		},
		setCurrentPage: (page) => {
			dispatch(setCurrentPageAC(page))
		},
		toggleIsFetching: (isFetching) => {
			dispatch(toggleIsFetchingAC(isFetching))
		},
		setTotalPeople: (totalPeople) => {
			dispatch(setTotalPeopleAC(totalPeople))
		}

	}
}

const FindUsers = connect(mapStateToProps,mapDispatchToProps)(UsersContainer);


export default FindUsers;
