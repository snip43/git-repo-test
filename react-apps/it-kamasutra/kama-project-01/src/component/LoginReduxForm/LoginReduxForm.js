import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validate';
import  {InputForLogin} from '../InputForLogin/InputForLogin';
import styles from  './LoginReduxForm.module.css'

// const maxLength15 = maxLength(15);

const LoginForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit} >
		
				<Field 	name={'email'} 
								label='Email:'
								placeholder='Логин' 
								component={InputForLogin} 
								validate ={[required]}
								type="text" />
				<Field 
								name={'password'}
								placeholder='Пароль' 
								label='Password:'
								component={InputForLogin} 
								validate ={[required]} 
								type='password' />
	
			<label>
					<Field 
									name={'rememberMe'} 
									type='checkbox'
									component={InputForLogin} />
									rememberMe
			</label>
		{props.error && <div className={styles.summaryError}>
			{props.error}
			</div>}
					<button className='btn btn-dark'>LogIn</button>
		
			</form>
}

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm)

export default LoginReduxForm;