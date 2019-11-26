import React from 'react';
import { Field, reduxForm } from 'redux-form'

const LoginForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}>
			<div>
				<Field name="login_login" placeholder={'login'} component='input' type="text" />
			</div>
			<div>
				<Field name='login_password' placeholder={'password'} component='input'/>
			</div>
			<label className=''><Field 
					name='login_rememberMe' 
					type='checkbox'
					component='input'/> 
						remember Me
			</label>
			<div><button className='btn btn-dark' type='submit'>LogIn</button></div>
			</form>
}

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm)

export default LoginReduxForm;