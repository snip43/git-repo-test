import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom';
import {addPost,updatePostText,updateMessageText,addMessage} from './redux/state';
import App from './component/App';



export let rerenderTree = (state) => {
	ReactDOM.render(
		<Router >
				<App 
					state={state} 
					addPost ={addPost} 
					updatePostText = {updatePostText} 
					addMessage = {addMessage}
					updateMessageText={updateMessageText}
					/>
		</Router>	, document.getElementById('root'));
}