import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import './main.css';
import Navbar from '../Navbar';
import Profile from '../Profile';
import Dialogs from '../Dialogs/';
import News from '../News/';
import Music from '../Music/';
import Settings from '../Settings/';


const Main = () => {
	return (
			<Router>
				<div className='container d-flex my-3 main'>
					<Navbar />
					<Route 
						component ={Dialogs}
						path='/dialogs'/>
					<Route 
						component ={Profile}
						path='/profile'/>
					<Route 
						component ={News}
						path='/news'/>
					<Route 
						component ={Music}
						path='/music'/>
					<Route 
						component ={Settings}
						path='/settings'/>
					
				</div>
			</Router>
);
}

export default Main;