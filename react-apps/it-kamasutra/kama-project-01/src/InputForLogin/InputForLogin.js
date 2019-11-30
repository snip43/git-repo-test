import React from 'react';

export const InputForLogin = ({input,label,placeholder,type,meta: { touched, error, warning } }) => (

  <div>

	<label>{label}</label>
  <input {...input} placeholder={placeholder} type={type} />
						{touched &&
        ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
)