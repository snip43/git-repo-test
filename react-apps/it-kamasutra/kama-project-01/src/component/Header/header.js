import React from 'react';
import AuthContainer from '../AuthContainer/AuthContainer'
import './header.css';


const Header = () => {
	return (
	<div className='header container-fluid bg-info'>
			<div className='container header_logo_login'>
				<div className='header_logo'></div>
				<AuthContainer />
			</div>
	</div>
	)
}

export default Header;