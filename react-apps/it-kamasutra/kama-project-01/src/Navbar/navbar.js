import React from 'react';

import './navbar.css';


const Navbar = () => {
return (
	<div className="navbar bg-info list-group pl-3 d-flex justify-content-start col-3">
			<a href="ya.ru" className='list-group-item list-group-item-action'>Profile</a>
			<a href="ya.ru" className='list-group-item list-group-item-action'>Messages</a>
			<a href="ya.ru" className='list-group-item list-group-item-action'>News</a>
			<a href="ya.ru" className='list-group-item list-group-item-action'>Music</a>
		</div>
)
}

export default Navbar;