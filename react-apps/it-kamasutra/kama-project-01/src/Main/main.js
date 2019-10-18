import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import './main.css';
import Navbar from '../Navbar/';
import Profile from './Profile';
import Dialogs from '../Navbar/Dialogs/';
import News from '../Navbar/News/';
import Music from '../Navbar/Music/';
import Settings from '../Navbar/Settings/';


const Main = ({dataDia,dataMes,dataPos}) => {

	
	return (
			<Router>
				<div className='container d-flex my-3 main'>
					<Navbar />
					<Route 
						render ={ () => (
						<Dialogs 
						diaDa ={dataDia} 
						mesDa = {dataMes} />)}
						path='/dialogs'/>
					<Route 
						render ={ () => <Profile posDa={dataPos}/>}
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
			</Router>
);
}

export default Main;