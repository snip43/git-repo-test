import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => {
	return (
	<div className ='error-indicator text-center text-primary'>
		<span className='crash'> BOOM ! </span>
		<span>Наши спецы уже работают над этим...</span>
	</div>
	)
}

export default ErrorIndicator;