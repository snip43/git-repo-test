import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import App from './component/App';
import {addPost,updatePostText,addMessage,updateMessageText,subscribe} from './redux/state'

import './index.css';

import state from './redux/state';

let rerenderTree = () => {
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

rerenderTree(state);
subscribe(rerenderTree);




