import React from 'react';
import LoginReduxForm from '../LoginReduxForm'

const Login = () => {

let submit = values => {
	console.log(values)
}

	return <div className='d-flex flex-column align-items-center border border-warning w-50'>
		<h1>LOGIN</h1>
		<LoginReduxForm onSubmit={submit}/>
	</div>
}

export default Login;