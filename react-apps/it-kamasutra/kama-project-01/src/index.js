import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import state from './redux/state';
import {addPost} from './redux/state';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(

	<Router >
			<App state={state} 
			addPost ={addPost} />
	</Router>	, document.getElementById('root'));

