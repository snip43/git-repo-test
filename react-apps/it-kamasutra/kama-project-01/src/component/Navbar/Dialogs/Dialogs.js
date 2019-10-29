import React from 'react';

import DialogItem from './Dialog-item';
import Message from './Message/';

import './Dialogs.css';
import NewMessageContainer from './Message/NewMessageContainer';

const Dialogs = (props) => { 
	let state = props.store.getState();
	
	let newDialog = state.dialogsPage.dialogData.map( (d,index) => 
					<DialogItem	name={d.name} 
											id={d.id} 
											key={index}/> );
	let getNewMessage = state.dialogsPage.messageData.map( (m,index) => 
					<Message 
											message={m.message} 
											id={m.id} 
											key={index} />);

	return (
		<div className='dialogs d-flex w-100'>
			
			<div className="dialog-list list-group col-3 border-right">
				{newDialog}
			</div>

			<div className="messages-list col-9">
				{getNewMessage}
				
				<NewMessageContainer store={props.store}  />
			</div>
		
		</div>
	);
}

export default Dialogs;