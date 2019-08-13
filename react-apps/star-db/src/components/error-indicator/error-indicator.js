import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
	return (
		<div className='error-indicator'>
			<span className="boom">BOOM!</span>
			<span>
				Что-то пошло не так
			</span>
			<span>
				(но наши спецы уже это исправляют это)
			</span>

		</div>
	)
}

export default ErrorIndicator;