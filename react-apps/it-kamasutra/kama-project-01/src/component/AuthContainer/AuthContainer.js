import Auth from '../Auth'
import React,{Component} from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import {setUserDataAC} from '../../redux/auth_login-reducer'


class AuthContainer extends Component {

componentDidMount(){
		Axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
			withCredentials: true
		})
		.then(response=> {
			if(response.data.resultCode===0) {
				const {id,email,login} = response.data.data;
				this.props.setUserDataAC(id,email,login)
			}

		})
}

	render() {
		return <Auth {...this.props}/>
	}
}

const mapStateToProps = (state) => {
	return {
		userId: state.authLogin.data.id,
		email: state.authLogin.data.email,
		login: state.authLogin.data.login,
		isAuth: state.authLogin.data.isAuth
	}

}

const mapDispatchToProps = {
	setUserDataAC
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthContainer)

