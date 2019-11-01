import React from 'react';
import { Route } from 'react-router-dom'


import './main.css';
import Navbar from '../Navbar/';
import Profile from './Profile';
import Dialogs from '../Navbar/Dialogs/';
import News from '../Navbar/News/';
import Music from '../Navbar/Music/';
import Settings from '../Navbar/Settings/';


const Main = (props) => {

	return (
		
				<div className='container d-flex my-3 main'>
				
					<Navbar />
					<div className='content'>
						<Route 
								render ={ () =>  <Dialogs 
																		store = {props.store}  />}
																		path='/dialogs'/>
						<Route 
								render ={ () => <Profile />} 
																		path='/profile'/>
						<Route 
								render ={ () => <News />}
																		path='/news'/>
						<Route 
								render ={ () => <Music />}
																		path='/music'/>
						<Route 
								render ={ () => <Settings />}
																		path='/settings'/>
					</div>
					
				</div>
		
);
}

export default Main;