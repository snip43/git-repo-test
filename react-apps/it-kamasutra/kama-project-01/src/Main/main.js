import React from 'react'

import './main.css';
import Navbar from '../Navbar';
import Content from '../Content';

const Main = () => {
	return (
			<div className='container d-flex justify-content-between my-3 main'>
				<Navbar />
				<Content />
			</div>
	);
}

export default Main;