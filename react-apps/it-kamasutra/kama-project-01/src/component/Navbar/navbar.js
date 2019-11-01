import React from 'react';
import {NavLink} from 'react-router-dom';

import Friends from './Friends/'

import './navbar.css';
import store from '../../redux/redux-store';


const Navbar = () => {
return (
	<div className="sidebar bg-info col-3 mr-3 ">
		<div className='btn-group-vertical w-100 my-3 sidebar_link'>
				<NavLink to="/profile" className='btn btn-outline-light'>Profile</NavLink>
				<NavLink to="/dialogs" className='btn btn-outline-light'>Dialogs</NavLink>
				<NavLink to="/news" className='btn btn-outline-light'>News</NavLink>
				<NavLink to="/music" className='btn btn-outline-light'>Music</NavLink>
				<NavLink to="/settings" className='btn btn-outline-secondary  mt-5'>Settings</NavLink>
		</div>

		<div className='navbar__friends mt-5'><Friends friendsData ={store.getState().navbarPage.friendsData} /> </div>

	</div>
)
}

export default Navbar;