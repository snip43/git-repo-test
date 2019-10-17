import React from 'react';
import { NavLink } from 'react-router-dom'


import './dialog-item.css';

const DialogItem = ({name,id}) => {

	let path = `/dialogs/${id}`;

	return	<NavLink to= {path} className="dialog-item list-group-item">{name}</NavLink>
	
}

export default DialogItem;