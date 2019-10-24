import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import './main.css';
import Navbar from '../Navbar/';
import Profile from './Profile';
import Dialogs from '../Navbar/Dialogs/';
import News from '../Navbar/News/';
import Music from '../Navbar/Music/';
import Settings from '../Navbar/Settings/';


const Main = (props) => {
	return (
			<Router>
				<div className='container d-flex my-3 main'>
					<Navbar state = { props.state.navbarPage }/>
					<div className='content'>
						<Route 
								render ={ () => ( <Dialogs 
																		state={ props.state.dialogsPage}
																		addMessage={props.addMessage}
																		updateMessageText={props.updateMessageText}	 />)}
																		path='/dialogs'/>
						<Route 
								render ={ () => <Profile 
																		state = {props.state.profilePage}
																		addPost={props.addPost} 
																		updatePostText={props.updatePostText} 
								/>}
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
			</Router>
);
}

export default Main;