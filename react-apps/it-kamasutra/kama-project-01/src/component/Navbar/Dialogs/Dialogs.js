import React from 'react';

import DialogItem from './Dialog-item';
import Message from './Message/';

import './Dialogs.css';
import NewMessage from './Message/NewMessage';

const Dialogs = (props) => {

	let newDialog = props.state.dialogData.map( (d,index) => <DialogItem name={d.name} id={d.id} key={index}/> );
	let getNewMessage = props.state.messageData.map( (m,index) => <Message message={m.message} id={m.id} key={index} />);

	return (
		<div className='dialogs d-flex w-100'>
			
			<div className="dialog-list list-group col-3 border-right">
				{newDialog}
			</div>

			<div className="messages-list col-9">
				{getNewMessage}
				<NewMessage  
						updateMessageText={props.updateMessageText} 
						addMessage={props.addMessage}/>
			</div>
		
		</div>
	);
}

export default Dialogs;