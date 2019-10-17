import React from 'react';
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import DialogItem from '../Dialog-item';
import Message from '../Message/';

import './Dialogs.css';

const Dialogs = () => {

	let dialogData = [
		{name:'Яна', id:'yana'},
		{name:'Мама', id:'mom'},
		{name:'Папа', id:'dady'},
		{name:'Мелочь', id:'sister'},
		{name:'Димон', id:'dimon'}
	];


	let messageData = [
		{id:1, message: 'Жду! Борщ готов!'},
		{id:2, message: 'Привет,сынуля! Работаешь?'},
		{id:3, message: 'У меня отпуск в октябре,хочу приехать!'},
	];

	let newDialog = dialogData.map( d => <DialogItem name={d.name} id={d.id} /> );
	let newMessage = messageData.map( m => <Message message={m.message} id={m.id} />);


	return (
		<div className='dialogs d-flex w-100'>
			
			<div className="dialog-list list-group col-3 border-right">
				{newDialog}
			</div>

			<div className="messages-list col-9">
				{newMessage}
			</div>
		</div>
	);
}

export default Dialogs;