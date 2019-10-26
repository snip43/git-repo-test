import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router} from 'react-router-dom'

import App from './component/App';

import './index.css';

import store from './redux/redux-store';

let rerenderTree = (state) => {
	
	ReactDOM.render(
		<Router >
				<App 
					state={state} 
					dispatch = {store.dispatch.bind(store)}		/>
		</Router>	, document.getElementById('root'));
}

rerenderTree(store.getState());

store.subscribe(() => {
	let state = store.getState();
	rerenderTree(state);
}); 




