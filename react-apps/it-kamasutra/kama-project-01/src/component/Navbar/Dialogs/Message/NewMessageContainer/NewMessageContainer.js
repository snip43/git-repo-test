import React from 'react';

import {aCreatorAddMessage,aCreatorUpdateMessageText} from '../../../../../redux/dialogs-reducer'
import NewMessage from '../NewMessage';

const NewMessageContainer = (props) => {

	let state = props.store.getState();
	let newMassageText = state.dialogsPage.NewMessageText;

	let addMessageText = () => {
		props.store.dispatch(aCreatorAddMessage());
	}

	let updateNewMessageText = (text) => {
		props.store.dispatch(aCreatorUpdateMessageText(text));
	}

return <NewMessage 
						newMassageText ={newMassageText}
						addMessageText={addMessageText}
						updateNewMessageText ={updateNewMessageText}/> 

}

export default NewMessageContainer;
	

