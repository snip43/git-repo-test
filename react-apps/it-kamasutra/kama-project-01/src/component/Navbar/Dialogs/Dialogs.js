import React from 'react';

import NewDialogContainer from './newDialogContainer';
import MessageContainer from './MessageContainer';


import './Dialogs.css';

const Dialogs = () => { 

	return (
		<div className='dialogs d-flex w-100'>

				<NewDialogContainer />
				<MessageContainer />

		</div>
	);
}

export default Dialogs;