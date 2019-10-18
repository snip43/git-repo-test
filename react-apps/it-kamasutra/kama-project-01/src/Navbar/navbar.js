import React from 'react';
import {NavLink} from 'react-router-dom';

import './navbar.css';


const Navbar = () => {

return (
	<div className="bg-info col-3 mr-3">
		<div className='btn-group-vertical w-100 my-3'>
				<NavLink to="/profile" className='btn btn-outline-light'>Profile</NavLink>
				<NavLink to="/dialogs" className='btn btn-outline-light'>Dialogs</NavLink>
				<NavLink to="/news" className='btn btn-outline-light'>News</NavLink>
				<NavLink to="/music" className='btn btn-outline-light'>Music</NavLink>
				<NavLink to="/settings" className='btn btn-outline-secondary  mt-5'>Settings</NavLink>
		</div>

		</div>
)
}

export default Navbar;