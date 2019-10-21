import React from 'react';

import NewMessage from '../Message/NewMessage';

import './Message.css';

const Message = ({message}) => {
	return (
			<div className="message"> 
				{message}
			</div>
	)
}

export default Message;