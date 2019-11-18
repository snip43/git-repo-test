import React from 'react';
import {NavLink} from 'react-router-dom';

import './auth.css'

const Auth = (props) => {
	return <div className='auth'>
	{props.isAuth ? props.login : <div className='btn btn-outline-dark'><NavLink to='/login'>Login</NavLink></div> }
	</div>

}

export default Auth;