import UsersContainer from '../UsersContainer';
import {connect} from 'react-redux';

import {onFollow,	unFollow,	setUsers,	setCurrentPage,	toggleIsFetching,	setTotalPeople} from '../../redux/findUsers-reducer'


const mapStateToProps = (state) => {

	return {
		usersData: state.findUsersPage.usersData,
		currentPage: state.findUsersPage.currentPage,
		pageSize: state.findUsersPage.pageSize,
		totalPeople: state.findUsersPage.totalPeople,
		isFetching: state.findUsersPage.isFetching

	}
}
const mapDispatchToProps =  {
		onFollow,
		unFollow,
		setUsers,
		setCurrentPage,
		toggleIsFetching,
		setTotalPeople
		}


const FindUsers = connect(mapStateToProps,mapDispatchToProps)(UsersContainer);


export default FindUsers;
