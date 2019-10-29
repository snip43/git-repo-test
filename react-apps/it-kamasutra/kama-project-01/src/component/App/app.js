import React from 'react';

import Header from '../Header/header';
import {connect} from 'react-redux';
import Main from '../Main/';
import Footer from '../Footer/footer';


import './app.css';


const  App = () => {
	const mapStateToProps = (store) => {
		return {
			store: store.getState()
		}
	}
	const mapDispatchToProps = () => {
		return {
		}
	}
	const Mainn = connect(mapStateToProps,mapDispatchToProps)(Main);
	console.log(Mainn);
return (
  <div className="App"> 
		<Header />
		{Mainn}
		<Footer />
	</div>
  );
}

export default App;
