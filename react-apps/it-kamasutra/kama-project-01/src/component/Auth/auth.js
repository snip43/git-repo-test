import React from 'react';
import {NavLink} from 'react-router-dom';

import './auth.css'

const Auth = (props) => {

	return <div className='auth'>
		{	props.isAuth 
		? <div className='auth_login'>
				{props.login} <button className='btn btn-outline-dark ml-3' 
															onClick={props.logout}
				>Log Out</button>
				{/* <button className='btn btn-sm btn-outline-dark ml-3' 
								onClick={props.logout()}>Log Out</button> */}
			</div> 
		: <div className='btn btn-outline-dark'> <NavLink to='/login'>Login</NavLink></div> }
	</div>
}


export default Auth;