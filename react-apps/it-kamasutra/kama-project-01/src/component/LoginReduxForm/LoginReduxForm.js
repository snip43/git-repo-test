import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validate';
import  {InputForLogin} from '../InputForLogin/InputForLogin';
import {createField} from '../../utils/helpers';

import styles from  './LoginReduxForm.module.css'

const LoginForm = ({handleSubmit,error}) => {
  return <form onSubmit={handleSubmit}>
		{createField('email','Email:','Логин',InputForLogin,[required],"text")}
		{createField('Password:','Password:','Пароль',InputForLogin,[required],"password")}
		<label>
					<Field 
									name={'rememberMe'} 
									type='checkbox'
									component={InputForLogin} />
									rememberMe
			</label>
		{error && <div className={styles.summaryError}>
			{error}
			</div>}
					<button className='btn btn-dark'>LogIn</button>
		
			</form>
}

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm)

export default LoginReduxForm;