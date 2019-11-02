import UsersContainer from '../UsersContainer';
import {connect} from 'react-redux';

import {aCreatorFollow,aCreatorUnFollow} from '../../redux/findUsers-reducer'


const mapStateToProps = (state) => {
	return {
		usersData: state.findUsersPage.usersData
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onFollow: () => {
			dispatch(aCreatorFollow())
		},
		unFollow: () => {
			dispatch(aCreatorUnFollow())
		}
	}
}

const FindUsers = connect(mapStateToProps,mapDispatchToProps)(UsersContainer);


export default FindUsers;
