import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { required, maxLength } from '../../utils/validate';
import { InputForLogin } from '../../InputForLogin/InputForLogin';

const maxLength15 = maxLength(15);

const LoginForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit} >
		
				<Field 	name="login_login" 
								label='Login:'
								placeholder='Логин' 
								component={InputForLogin} 
								validate ={[required,maxLength15]}
								type="text" />
				<Field 
								name='login_password' 
								placeholder='Пароль' 
								label='Password:'
								component={InputForLogin} 
								validate ={[required,maxLength15]} 
								type='text' />
	
			<label>
					<Field 
									name='login_rememberMe' 
									type='checkbox'
									component={InputForLogin} />
									rememberMe
			</label>
		
					<button className='btn btn-dark'>LogIn</button>
		
			</form>
}

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm)

export default LoginReduxForm;